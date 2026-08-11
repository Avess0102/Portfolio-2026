import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 1100);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          id="app-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0A]"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border border-[#222222] border-t-accent rounded-full"
              />
              <span className="font-display font-bold text-xs text-white uppercase">S</span>
            </div>
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.3em]">
              Loading Portfolio
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
