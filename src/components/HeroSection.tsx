import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
          Your Dashboard, Simplified.
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Unlock powerful insights and streamline your workflow with our intuitive dashboard. 
          Start managing your data effectively today.
        </p>
        <Button size="lg" className="rounded-md shadow-md" >
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;