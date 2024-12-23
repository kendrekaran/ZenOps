'use client';

import { motion } from 'framer-motion';
import { FooterLink } from './footer-link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Integration', href: '/integration' },
      { label: 'Updates', href: '/updates' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Manifesto', href: '/manifesto' },
      { label: 'Press', href: '/press' },
      { label: 'Contract', href: '/contract' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Examples', href: '/examples' },
      { label: 'Community', href: '/community' },
      { label: 'Guides', href: '/guides' },
      { label: 'Docs', href: '/docs' },
      { label: 'Press', href: '/press' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Security', href: '/security' },
    ],
  },
};

export function FooterSection() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            AI-Driven SEO For Everyone.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <div className="flex gap-2 mb-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background/50"
              />
              <Button>Join Waitlist</Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required · 7-days free trial
            </p>
          </motion.div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <div className="space-y-2">
                {section.links.map((link) => (
                  <FooterLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Zap className="w-8 h-8 text-purple-500" />
            <span className="text-sm text-muted-foreground">
              © 2024 Your Company, Inc.
            </span>
          </div>
          <div className="flex gap-6">
            <FooterLink href="https://twitter.com">𝕏</FooterLink>
            <FooterLink href="https://instagram.com">Instagram</FooterLink>
            <FooterLink href="https://youtube.com">YouTube</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}