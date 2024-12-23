export interface PricingPlan {
  name: string;
  price: string;
  priceInCents?: number;
  features: string[];
  popular?: boolean;
}

export interface PricingCardProps {
  plan: PricingPlan;
}