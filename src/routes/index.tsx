import { Header, InputCustom, Typography } from '@/components';
import { MainLayout } from '@/layouts';
import { createFileRoute } from '@tanstack/react-router';
import { Search } from 'lucide-react';
import { useState } from 'react';

const HomePage = () => {
  return (
    <MainLayout leftSidebar='cart'>
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
  const [search, setSearch] = useState('');
  return (
    <div>
      <InputCustom
        placeholder='Rechercher'
        size='lg'
        className='w-55'
        leftIcon={<Search className='size-5' />}
        clearable
        hasDropShadow
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClear={() => setSearch('')}
      />
    </div>
  );
};
