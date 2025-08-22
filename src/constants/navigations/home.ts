import { type TabItem } from '@/components';
import { TEST_1, TEST_2, TEST_3, TEST_4, TEST_5, TEST_6 } from './test';

export const HOME_TABS: TabItem[] = [
  {
    value: 'hot-dishes',
    label: 'Plats chaud',
    content: TEST_1
  },
  {
    value: 'cold-dishes',
    label: 'Plat froid',
    content: TEST_2
  },
  {
    value: 'soups',
    label: 'Soupes',
    content: TEST_3
  },
  {
    value: 'grill',
    label: 'Grillades',
    content: TEST_4,
  },
  {
    value: 'appetizer',
    label: 'Apéritifs',
    content: TEST_5
  },
  {
    value: 'desserts',
    label: 'Desserts',
    content: TEST_6,
  },
];

export type HomeTabValue = typeof HOME_TABS[number]['value'];
