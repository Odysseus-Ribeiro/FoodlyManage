import { Typography } from '@/components';

type HeaderProps = {
  children: React.ReactNode;
  displayDate?: boolean;
  Filter?: React.FC;
};

export const Header = ({ children, displayDate = true, Filter }: HeaderProps) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <header className='flex justify-between items-center p-6'>
      <div className='flex flex-col gap-2'>
        {children}
        {displayDate && (
          <Typography variant='muted' weight='extralight'>
            {formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)}
          </Typography>
        )}
      </div>

      {Filter && <Filter />}
    </header>
  );
};
