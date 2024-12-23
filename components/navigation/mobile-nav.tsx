'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from './nav-link';
import { navigationLinks } from './navigation-data';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border/50 py-4"
        >
          <nav className="flex flex-col space-y-2 px-4">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={onClose}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}