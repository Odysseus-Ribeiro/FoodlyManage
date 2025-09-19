import { Button, Card, CardContent, CardFooter, CardHeader, Skeleton, Typography } from '@/components';
import type { Food } from '@/data/foods';
import { motion } from 'framer-motion';
import { useState } from 'react';

type FoodCardProps = {
  food: Food;
};

export function FoodCard({ food }: FoodCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.05,
        y: -8,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
        },
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{ transformOrigin: 'center center' }}>
      <Card key={food.id} className='p-4 flex flex-col h-70 w-full max-w-none mx-auto cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300'>
        <CardHeader className='relative flex-1'>
          <motion.img
            src={`/foods/${food.type}/${food.category}/${food.image}`}
            alt={food.name}
            className='absolute w-full h-33 object-contain -top-14'
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
        </CardHeader>

        <CardContent className='flex flex-col justify-between'>
          <Typography variant='h3' className='text-center'>
            {food.name}
          </Typography>

          <Typography variant='price' className='text-center'>
            $ {food.price}
          </Typography>

          <Typography variant='muted' className='text-center'>
            {food.stock} Bowls available
          </Typography>
        </CardContent>

        <CardFooter>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='w-full'>
            <Button className='w-full bg-primary text-foreground transition-all duration-200 hover:bg-primary/80 hover:shadow-[var(--box-shadow-glow-active)] dark:hover:shadow-[var(--box-shadow-glow-active-dark)]'>
              Order now
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function FoodCardSkeleton() {
  return (
    <Card className='p-4 flex flex-col h-70 w-full max-w-none mx-auto'>
      <CardHeader className='relative flex-1'>
        <Skeleton className='absolute size-28 -top-10 left-1/2 -translate-x-1/2 rounded-full' />
      </CardHeader>

      <CardContent className='flex flex-col justify-between space-y-2'>
        <Skeleton className='w-3/4 h-5 mx-auto rounded' />
        <Skeleton className='w-1/2 h-5 mx-auto rounded' />
        <Skeleton className='w-2/3 h-3 mx-auto rounded' />
      </CardContent>

      <CardFooter>
        <Skeleton className='w-full h-10 rounded-lg' />
      </CardFooter>
    </Card>
  );
}
