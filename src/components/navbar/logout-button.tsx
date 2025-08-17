import { Button } from '@/components';
import { NAVIGATION_ICONS } from '@/constants';

interface LogoutButtonProps {
  onLogout?: () => void;
}

export function LogoutButton({ onLogout }: LogoutButtonProps) {
  return (
    <Button variant='ghost' className='size-14' onClick={onLogout} title='Se déconnecter'>
      <img src={NAVIGATION_ICONS.LogOut} alt='Disconnect' className='size-6' />
    </Button>
  );
}
