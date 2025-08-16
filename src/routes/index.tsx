import { createFileRoute } from '@tanstack/react-router';

const HomePage = () => {
  return <div className='bg-red-500'>Page d'accueil</div>;
};

export const Route = createFileRoute('/')({
  component: HomePage,
});
