import { Button, Navbar, Sheet, SheetContent, SheetTrigger, SidebarProvider } from '@/components';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';

type LeftSidebar = 'cart';

type MainLayoutProps = {
  children: React.ReactNode;
  leftSidebar?: LeftSidebar;
};

export function MainLayout({ children, leftSidebar }: MainLayoutProps) {
  return (
    <SidebarProvider className='h-screen ' style={{ '--sidebar-width': '6.5rem' } as React.CSSProperties}>
      <Navbar />

      <main className='flex-1'>{children}</main>

      {leftSidebar && RenderLeftSidebarComponent(leftSidebar)}
    </SidebarProvider>
  );
}

function RenderLeftSidebarComponent(leftSidebar: LeftSidebar) {
  switch (leftSidebar) {
    case 'cart':
      return <TempoLeftSidebar />;
    default:
      return null;
  }
}

function TempoLeftSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <div className='bg-sidebar w-22 rounded-l-2xl flex justify-center pt-6  '>
        <SheetTrigger asChild>
          <Button className='size-12 bg-primary hover:bg-primary/80 hover:shadow-[var(--box-shadow-glow-active)] dark:hover:shadow-[var(--box-shadow-glow-active-dark)] hover:animate-[var(--animate-glow-pulse)] dark:hover:animate-[var(--animate-glow-pulse-dark)] transition-all duration-300'>
            <ShoppingCart className='size-5' />
          </Button>
        </SheetTrigger>
      </div>

      <SheetContent>
        <p>Test</p>
      </SheetContent>
    </Sheet>
  );
}
