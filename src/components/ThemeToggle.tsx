'use client';

import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="transition-transform duration-300 ease-in-out hover:scale-110"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <FaSun className="h-5 w-5 text-sky-400" />
      ) : (
        <FaMoon className="h-5 w-5 text-sky-600" />
      )}
    </Button>
  );
}
