import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components';
import { cn } from '@/lib';
import { motion } from 'framer-motion';
import React, { useEffect, useId, useRef, useState } from 'react';

export interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsCustomProps {
  tabs: TabItem[];
  defaultValue?: string;
  className?: string;
  tabsListClassName?: string;
  tabsTriggerClassName?: string;
  tabsContentClassName?: string;
}

export function TabsCustom({ tabs, defaultValue, className, tabsListClassName, tabsTriggerClassName, tabsContentClassName }: TabsCustomProps) {
  const firstTabValue = tabs?.[0]?.value || '';
  const activeDefaultValue = defaultValue || firstTabValue;
  const [activeTab, setActiveTab] = useState(activeDefaultValue);

  const isFirstRender = useRef(true);
  const layoutId = useId();

  useEffect(() => {
    if (defaultValue) setActiveTab(defaultValue);
  }, [defaultValue]);

  if (!tabs || tabs.length === 0) return null;

  return (
    <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)} className={cn('items-center', className)}>
      <TabsList className={cn('h-auto rounded-none border-b bg-transparent p-0 relative', tabsListClassName)}>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={cn(
              'relative rounded-none py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:font-medium',
              tabsTriggerClassName
            )}>
            {tab.label}

            {activeTab === tab.value && (
              <motion.div
                layoutId={`activeTabIndicator-${layoutId}`}
                className='absolute bottom-0 left-0 right-0 h-0.5 bg-primary'
                style={{ transformOrigin: 'left' }}
                initial={isFirstRender.current ? { scaleX: 0 } : false}
                animate={isFirstRender.current ? { scaleX: 1 } : undefined}
                onAnimationComplete={() => {
                  isFirstRender.current = false;
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  bounce: 0.4,
                }}
              />
            )}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className={tabsContentClassName}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
