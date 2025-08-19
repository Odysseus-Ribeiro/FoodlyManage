import { Navbar, SidebarProvider } from '@/components';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className='h-screen ' style={{ '--sidebar-width': '6.5rem' } as React.CSSProperties}>
      <Navbar />

      <main className='flex-1'>
        {children}
      </main>
    </SidebarProvider>
  );
}
