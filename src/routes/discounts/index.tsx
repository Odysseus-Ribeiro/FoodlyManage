import  { MainLayout } from '@/layouts';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/discounts/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <MainLayout>Hello "/discounts/"!</MainLayout>;
}
