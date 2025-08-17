import { MainLayout } from '@/layouts';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/orders/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <MainLayout>Hello "/orders/"!</MainLayout>;
}
