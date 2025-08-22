import { TabsCustom } from '@/components';
import { HOME_TABS } from '@/constants';

export function Home() {
  return (
    <div>
      <TabsCustom tabs={HOME_TABS} className='items-start px-6 -my-3' tabsListClassName='gap-4 w-full justify-start' tabsTriggerClassName='py-3' />
    </div>
  );
}
