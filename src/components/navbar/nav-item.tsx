import type { NavigationItem } from '@/constants';
import { cn } from '@/lib';
import { Link, useLocation } from '@tanstack/react-router';

interface NavItemProps {
  navigation: NavigationItem;
}

export function NavItem({ navigation }: NavItemProps) {
  const { pathname } = useLocation();
  const isActive = pathname === navigation.path;

  return (
    <Link
      key={navigation.label}
      to={navigation.path}
      className={cn(
        'flex items-center justify-center size-14 rounded-lg transition-all duration-300',
        isActive
          ? 'bg-primary shadow-[var(--box-shadow-glow-active)] dark:shadow-[var(--box-shadow-glow-active-dark)] animate-[var(--animate-glow-pulse)] dark:animate-[var(--animate-glow-pulse-dark)]'
          : 'hover:bg-primary/20'
      )}>
      <img src={navigation.icon} alt={navigation.label} className={cn('size-6 transition-all duration-200', isActive && 'brightness-0 invert')} />
    </Link>
  );
}
