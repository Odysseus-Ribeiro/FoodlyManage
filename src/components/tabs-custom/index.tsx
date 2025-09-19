import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components';
import { cn } from '@/lib';
import { motion } from 'framer-motion';
import React, { useEffect, useId, useRef, useState } from 'react';

export interface TabItem {
  value: string;
  label: string;
  content: React.FC;
}

export interface TabsCustomProps {
  tabs: TabItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  tabsListClassName?: string;
  tabsTriggerClassName?: string;
  tabsContentClassName?: string;
}

export function TabsCustom({ tabs, defaultValue, value, onValueChange, className, tabsListClassName, tabsTriggerClassName, tabsContentClassName }: TabsCustomProps) {
  const firstTabValue = tabs?.[0]?.value || '';
  const activeDefaultValue = defaultValue || firstTabValue;
  const [internalActiveTab, setInternalActiveTab] = useState(activeDefaultValue);

  const isFirstRender = useRef(true);
  const layoutId = useId();

  // Use external value if provided, otherwise use internal state
  const activeTab = value ? value : internalActiveTab;

  const handleValueChange = (newValue: string) => {
    if (onValueChange) {
      onValueChange(newValue);
    } else {
      setInternalActiveTab(newValue);
    }
  };

  useEffect(() => {
    if (defaultValue && value === undefined) setInternalActiveTab(defaultValue);
  }, [defaultValue, value]);

  if (!tabs || tabs.length === 0) return null;

  return (
    <Tabs value={activeTab} onValueChange={handleValueChange} className={cn('items-center h-full gap-0 !px-0', className)}>
      <div className='px-6 w-full'>
        <TabsList className={cn('rounded-none gap-2 border-b bg-transparent py-0 relative ', tabsListClassName)}>
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className={cn(
                'relative rounded-none px-0 cursor-pointer data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:font-medium',
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
      </div>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className={cn('w-full pt-4 pb-6 px-6 overflow-auto max-h-[calc(100vh-158px)] overflow-x-visible', tabsContentClassName)}>
          <tab.content />
        </TabsContent>
      ))}
    </Tabs>
  );
}
