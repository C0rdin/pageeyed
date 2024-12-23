import { PricingPlan } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Basic",
    price: "€349",
    priceInCents: 34900,
    features: [
      "Up to 5 pages",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
      "Fast Loading Speed",
      "3 Rounds of Revisions"
    ]
  },
  {
    name: "Extended",
    price: "€549",
    priceInCents: 54900,
    features: [
      "Up to 10 pages",
      "Advanced SEO Features",
      "Custom Forms",
      "Analytics Integration",
      "Social Media Integration",
      "5 Rounds of Revisions",
      "Priority Support"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "Custom",
    features: [
      "Unlimited Pages",
      "Custom Functionality",
      "E-commerce Features",
      "Advanced Integrations",
      "Custom Analytics",
      "Unlimited Revisions",
      "24/7 Priority Support"
    ]
  }
];