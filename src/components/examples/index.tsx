import { TabsCustom } from '@/components';
import { CardExample } from './card';
import { InputCustomExample } from './input-custom';
import { TabsExample } from './tabs';
import { TypographyExample } from './typography';

const ExamplesTabs = [
  {
    label: 'Typography',
    value: 'typography',
    content: TypographyExample,
  },
  {
    label: 'InputCustom',
    value: 'input-custom',
    content: InputCustomExample,
  },
  {
    label: 'Tabs',
    value: 'tabs',
    content: TabsExample,
  },
  {
    label: 'Card',
    value: 'card',
    content: CardExample,
  },
];

export const Examples = () => {
  return <TabsCustom tabs={ExamplesTabs} tabsTriggerClassName='text-foreground data-[state=active]:text-primary cursor-pointer' />;
};
