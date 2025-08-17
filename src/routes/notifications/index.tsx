import { MainLayout } from '@/layouts';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/notifications/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <MainLayout>Hello "/notifications/"!</MainLayout>;
}
