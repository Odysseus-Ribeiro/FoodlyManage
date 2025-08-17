import { ModeToggle } from '@/components';
import { MainLayout } from '@/layouts';
import { createFileRoute } from '@tanstack/react-router';

const HomePage = () => {
  return (
    <MainLayout>
      Page d'accueil
      <ModeToggle />
    </MainLayout>
  );
};

export const Route = createFileRoute('/')({
  component: HomePage,
});
