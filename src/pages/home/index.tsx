import { TabsCustom } from '@/components';
import { HOME_TABS } from '@/constants';
import { useNavigate, useSearch } from '@tanstack/react-router';

export function Home() {
  const search = useSearch({ from: '/' });
  const navigate = useNavigate({ from: '/' });

  const handleTabChange = (tabValue: string) => {
    navigate({
      search: { tab: tabValue },
      replace: true, // For avoid history pollution
    });
  };

  return (
    <div className='flex-1'>
      <TabsCustom tabs={HOME_TABS} value={search.tab} onValueChange={handleTabChange} className='items-start px-6' tabsListClassName='gap-4 w-full justify-start' tabsTriggerClassName='py-3' />
    </div>
  );
}
