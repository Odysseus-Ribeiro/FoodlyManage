import Logo from '@/assets/logo.svg';
import { LogoutButton, NavItem, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from '@/components';
import { NAVIGATION_ITEMS } from '@/constants';

export function Navbar() {
  return (
    <Sidebar className='w-26 rounded-r-2xl overflow-hidden'>
      <SidebarHeader className='p-0 pt-6 flex items-center justify-center'>
        <img src={Logo} alt='FoodlyManage' className='size-14' />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className='flex items-center justify-center gap-6 mt-8'>
          {NAVIGATION_ITEMS.map((navigation) => (
            <NavItem key={navigation.label} navigation={navigation} />
          ))}
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className='p-0 flex items-center justify-center pb-6'>
        <LogoutButton />
      </SidebarFooter>
    </Sidebar>
  );
}
