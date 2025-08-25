'use client';
import * as React from 'react';
// import { cn } from '@/lib/utils';

const defaultTestimonials = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    description: 'Great service! The team was professional and efficient.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    description: 'Highly recommended! The staff was very helpful and friendly.'
  },
  {
    id: 3,
    name: 'Robert Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    description: 'Excellent experience from start to finish. Will come back!'
  }
];

const TestimonialCard = React.memo(({ testimonial, isCurrent, showArrows, onNext, onPrevious }) => (
  <div
    className={
    'absolute w-full h-full rounded-2xl cursor-grab active:cursor-grabbing transition-all duration-500 ' +
    'bg-white shadow-xl dark:bg-card dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-1px_-1px_3px_rgba(255,255,255,0.1)] ' +
    (isCurrent ? 'opacity-100 scale-100 z-30' : 'opacity-60 scale-95 z-20')
  }
  style={{
    zIndex: isCurrent ? 30 : 20,
  }}
  >
    {showArrows && isCurrent && (
      <div className="absolute inset-x-0 top-2 flex justify-between px-4 z-10">
        <button
          onClick={onPrevious}
          className="text-2xl select-none cursor-pointer text-gray-300 hover:text-gray-400 dark:text-muted-foreground dark:hover:text-primary transition-colors"
          aria-label="Previous testimonial"
        >
          &larr;
        </button>
        <button
          onClick={onNext}
          className="text-2xl select-none cursor-pointer text-gray-300 hover:text-gray-400 dark:text-muted-foreground dark:hover:text-primary transition-colors"
          aria-label="Next testimonial"
        >
          &rarr;
        </button>
      </div>
    )}
    <div className="p-6 flex flex-col items-center gap-4 text-center h-full justify-center">
      <img
        src={testimonial.avatar}
        alt={`${testimonial.name}'s avatar`}
        className="w-16 h-16 rounded-full object-cover"
        width={64}
        height={64}
        loading="lazy"
      />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-foreground">
        {testimonial.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-muted-foreground">
        "{testimonial.description}"
      </p>
    </div>
  </div>
));
TestimonialCard.displayName = 'TestimonialCard';

const TestimonialCarousel = React.forwardRef((
  {
    className,
    testimonials = defaultTestimonials,
    showArrows = true,
    showDots = true,
    ...props
  },
  ref
) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
   <div
  ref={ref}
  className={`py-7 h-auto w-full bg-main testimonialBG flex flex-col items-center justify-center fade-in ${className || ''}`}
  {...props}
>

      <h2 className="text-2xl font-semibold text-white mb-2">Our Testimonials</h2>
      <div className="relative md:w-[40%] w-[80%] h-64">
        {testimonials.map((testimonial, index) => {
          const isCurrent = index === currentIndex
          const isPrev = index === (currentIndex + testimonials.length - 1) % testimonials.length
          const isNext = index === (currentIndex + 1) % testimonials.length

          if (!isCurrent && !isPrev && !isNext) return null

          return (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isCurrent={isCurrent}
              showArrows={showArrows}
              onNext={goToNext}
              onPrevious={goToPrevious}
            />
          )
        })}
      </div>
      {showDots && (
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-200 border-2 border-white ${idx === currentIndex ? 'bg-secondary scale-125' : 'bg-white/60'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
});
TestimonialCarousel.displayName = 'TestimonialCarousel';

export default TestimonialCarousel; 