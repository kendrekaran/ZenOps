'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <Link 
        href={href}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        {children}
      </Link>
    </motion.div>
  );
}