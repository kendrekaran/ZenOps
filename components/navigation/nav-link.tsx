'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-md hover:text-purple-500"
      >
        {children}
      </Link>
    </motion.div>
  );
}