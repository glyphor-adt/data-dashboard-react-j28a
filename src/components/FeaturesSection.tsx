import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid } from "@/components/ui/grid";
import { LucideIcon } from 'lucide-react';
import { Lightbulb, BarChart, Settings, LayoutDashboard } from "lucide-react";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const featuresData: FeatureItem[] = [
  {
    icon: LayoutDashboard,
    title: "Intuitive Dashboard",
    description: "Easily navigate and understand your data with our user-friendly dashboard layout.",
  },
  {
    icon: BarChart,
    title: "Powerful Visualizations",
    description: "Gain deeper insights with interactive charts, graphs, and data visualizations.",
  },
  {
    icon: Lightbulb,
    title: "Data-Driven Insights",
    description: "Uncover hidden trends and make informed decisions based on real-time data analysis.",
  },
  {
    icon: Settings,
    title: "Customizable Settings",
    description: "Tailor the dashboard to your specific needs with customizable settings and preferences.",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-foreground">Key Features</h2>
        <Grid numColsLg={2} numColsMd={2} numColsSm={1} numColsXl={2} gap={6}>
          {featuresData.map((feature, index) => (
            <Card key={index} className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-medium">
                  <feature.icon className="w-5 h-5 text-primary" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default FeaturesSection;