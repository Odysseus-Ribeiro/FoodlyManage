import { ModeToggle } from '@/components';
import { TypographyExample } from '@/components/examples/typography';
import { MainLayout } from '@/layouts';
import { createFileRoute } from '@tanstack/react-router';

const HomePage = () => {
  return (
    <MainLayout>
      Page d'accueil
      <ModeToggle />
      <br />
      <hr/>
      <br />
      <TypographyExample />
    </MainLayout>
  );
};

export const Route = createFileRoute('/')({
  component: HomePage,
});
