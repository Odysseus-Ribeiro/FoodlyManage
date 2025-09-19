import { Header, InputCustom, Typography } from '@/components';
import { HOME_TABS, type HomeTabValue } from '@/constants';
import { MainLayout } from '@/layouts';
import { Home } from '@/pages';
import { createFileRoute } from '@tanstack/react-router';
import { Search } from 'lucide-react';
import { useState } from 'react';

const HomePage = () => {
  return (
    <MainLayout leftSidebar='cart'>
      <Header Filter={Filter}>
        <Typography variant='h1'>FoodlyManage</Typography>
      </Header>

      <Home />
    </MainLayout>
  );
};

export const Route = createFileRoute('/')({
  component: HomePage,
  validateSearch: (search: Record<string, unknown>) => {
    const tabValue = search.tab as string;
    const validTabs = HOME_TABS.map((tab) => tab.value);
    const isValidTab = validTabs.includes(tabValue);

    return {
      tab: (isValidTab ? tabValue : 'hot-dishes') as HomeTabValue,
    };
  },
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
