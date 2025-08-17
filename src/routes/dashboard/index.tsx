import { MainLayout } from '@/layouts';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MainLayout>Hello "/dashboard/"!</MainLayout>;
}
