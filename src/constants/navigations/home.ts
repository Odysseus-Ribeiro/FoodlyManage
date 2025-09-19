import { type TabItem } from '@/components';
import { HomeContents } from '@/pages/home/contents';

export const HOME_TABS: TabItem[] = [
  {
    value: 'hot-dishes',
    label: 'Plats chaud',
    content: HomeContents
  },
  {
    value: 'cold-dishes',
    label: 'Plat froid',
    content: HomeContents,
  },
  {
    value: 'soups',
    label: 'Soupes',
    content: HomeContents
  },
  {
    value: 'grills',
    label: 'Grillades',
    content: HomeContents,
  },
  {
    value: 'appetizers',
    label: 'Apéritifs',
    content: HomeContents,
  },
  {
    value: 'desserts',
    label: 'Desserts',
    content: HomeContents,
  },
];

export type HomeTabValue = typeof HOME_TABS[number]['value'];
