import { InputCustomExample } from '@/components/examples/input-custom';
import { TypographyExample } from '@/components/examples/typography';
import { MainLayout } from '@/layouts';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/discounts/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <MainLayout>
      Hello "/discounts/"! <br /> <hr /> <br /> <TypographyExample /> <br /> <hr /> <br /> <InputCustomExample />
    </MainLayout>
  );
}
