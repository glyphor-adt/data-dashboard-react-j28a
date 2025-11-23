import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  avatarUrl?: string;
  testimonial: string;
}

const placeholderTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Doe',
    title: 'CEO, Company A',
    testimonial:
      'This product has been a game changer for our company. We have seen a significant increase in productivity and efficiency.',
  },
  {
    id: '2',
    name: 'Jane Smith',
    title: 'Marketing Manager, Company B',
    testimonial:
      'The support team is incredibly responsive and helpful. They have gone above and beyond to assist us with any issues we have encountered.',
  },
  {
    id: '3',
    name: 'Peter Jones',
    title: 'Software Engineer, Company C',
    testimonial:
      'I highly recommend this product to anyone looking for a reliable and user-friendly solution. It has exceeded our expectations in every way.',
  },
];

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const testimonialsToDisplay = testimonials || placeholderTestimonials;

  return (
    <section className="py-12 bg-secondary/10 dark:bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-secondary-foreground">What Our Clients Say</h2>

        {testimonialsToDisplay.length > 0 ? (
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonialsToDisplay.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="p-4">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          {testimonial.avatarUrl ? (
                            <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                          ) : (
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          )}
                        </Avatar>
                        <div>
                          <CardTitle className="font-semibold">{testimonial.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-secondary-foreground">"{testimonial.testimonial}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
          </Carousel>
        ) : (
          <p className="text-center text-muted-foreground">No testimonials available.</p>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;