'use client';

import { motion } from 'framer-motion';
import { PricingCard } from './pricing-card';

const plans = [
  {
    title: 'Basic',
    price: 29,
    features: [
      'Keyword optimization',
      'Automated meta tags',
      'SEO monitoring',
      'Monthly reports'
    ]
  },
  {
    title: 'Pro',
    price: 79,
    features: [
      'Keyword optimization',
      'Automated meta tags',
      'SEO monitoring',
      'Monthly reports',
      'Content suggestions',
      'Link optimization'
    ],
    isPopular: true
  },
  {
    title: 'Business',
    price: 149,
    features: [
      'Keyword optimization',
      'Automated meta tags',
      'SEO monitoring',
      'Monthly reports',
      'Content suggestions',
      'Link optimization',
      'Multi-user access',
      'API integration'
    ]
  }
];

export function PricingSection() {
  return (
    <section id='price' className="py-24 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl  font-bold mb-4">Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the right plan to meet your SEO needs and start optimizing today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}