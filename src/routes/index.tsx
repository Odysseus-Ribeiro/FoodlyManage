import { Header, Input, Typography } from '@/components';
import { MainLayout } from '@/layouts';
import { createFileRoute } from '@tanstack/react-router';

const HomePage = () => {
  return (
    <MainLayout>
      <Header Filter={Filter}>
        <Typography variant='h1'>FoodlyManage</Typography>
      </Header>
    </MainLayout>
  );
};

export const Route = createFileRoute('/')({
  component: HomePage,
});

const Filter = () => {
  return (
    <div>
      <Input placeholder='Rechercher'  />
    </div>
  );
};
