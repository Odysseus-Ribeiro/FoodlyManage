import { MainLayout } from '@/layouts';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/customers/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <MainLayout>Hello "/customers/"!</MainLayout>;
}
