import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/constants";
import Image from "next/image";

// Helper function to generate star ratings
function getStars(rating: number): string {
  const fullStar = "⭐";
  return fullStar.repeat(Math.min(Math.max(rating, 0), 5)); // Ensure rating is between 0 and 5
}

export default function TestimonialSection() {
  // Autoplay plugin configuration for carousel
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: true })
  );

  return (
    <>
      {/* Testimonials Section - Dark theme with responsive padding */}
      <section
        id="testimonials"
        className="bg-gradient-to-r from-white via-blue-50/40 to-rose-50/70 
                 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 
                 md:py-24 text-gray-900 text-center w-full"
      >
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div
            className="inline-block px-4 py-2 sm:px-5 sm:py-2.5
                    bg-gradient-to-r from-blue-100 to-rose-100
                    backdrop-blur-md border border-black/10 rounded-full
                    text-sm font-medium mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent font-semibold">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Client Stories
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Discover why businesses trust QuantEdge Limited to deliver
            exceptional results.
          </p>
        </div>

        {/* Carousel */}
        <div className="w-full max-w-4xl mx-auto">
          <Carousel
            className="w-full"
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {testimonials.map((t, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-10">
                      <div className="text-2xl mb-4">{getStars(t.rating)}</div>
                      <blockquote className="text-base sm:text-lg md:text-xl italic mb-8 text-gray-700 max-w-3xl">
                        &ldquo;{t.testimonial}&rdquo;
                      </blockquote>
                      <div className="flex items-center space-x-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden">
                          <Image
                            src="/images/image_3.svg"
                            alt={t.name}
                            width={56}
                            height={56}
                            className="object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-gray-900">
                            {t.name}
                          </p>
                          <p className="text-sm text-gray-600">{t.project}</p>
                          <p className="text-xs text-gray-500 italic">
                            {t.date}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-blue-100/40 hover:bg-blue-100/70 text-gray-900" />
            <CarouselNext className="bg-blue-100/40 hover:bg-blue-100/70 text-gray-900" />
          </Carousel>
        </div>
      </section>
    </>
  );
}
