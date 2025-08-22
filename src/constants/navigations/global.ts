// Navigation icons
import Customer from '@/assets/navigations/customer.svg';
import Dashboard from '@/assets/navigations/dashboard.svg';
import Discount from '@/assets/navigations/discount.svg';
import Home from '@/assets/navigations/home.svg';
import LogOut from '@/assets/navigations/log-out.svg';
import Notification from '@/assets/navigations/notification.svg';
import Order from '@/assets/navigations/order.svg';
import Setting from '@/assets/navigations/setting.svg';

export const NAVIGATION_ICONS = {
  Home,
  Discount,
  Dashboard,
  Notification,
  Order,
  Customer,
  Setting,
  LogOut,
} as const;

export const NAVIGATION_ITEMS = [
  {
    label: 'Home',
    icon: NAVIGATION_ICONS.Home,
    path: '/',
  },
  {
    label: 'Discount',
    icon: NAVIGATION_ICONS.Discount,
    path: '/discounts',
  },
  {
    label: 'Dashboard',
    icon: NAVIGATION_ICONS.Dashboard,
    path: '/dashboard',
  },
  {
    label: 'Notification',
    icon: NAVIGATION_ICONS.Notification,
    path: '/notifications',
  },
  {
    label: 'Order',
    icon: NAVIGATION_ICONS.Order,
    path: '/orders',
  },
  {
    label: 'Customer',
    icon: NAVIGATION_ICONS.Customer,
    path: '/customers',
  },
  {
    label: 'Setting',
    icon: NAVIGATION_ICONS.Setting,
    path: '/settings',
  },
] as const;

export type NavigationItem = typeof NAVIGATION_ITEMS[number];
export type IconName = keyof typeof NAVIGATION_ICONS;
