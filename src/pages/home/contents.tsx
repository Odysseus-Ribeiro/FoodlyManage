import { FoodCard, FoodCardSkeleton } from '@/components';
import { type Food, getFoods } from '@/data/foods';
import { useEffect, useState } from 'react';

export function HomeContents() {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    setLoading(true);
    getFoods().then((foods) => {
      setFoods(foods);
      setLoading(false);
    });
  }, []);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 lg:gap-x-8 gap-y-18 auto-rows-fr mt-12'>
      {loading ? Array.from({ length: 10 }).map((_, index) => <FoodCardSkeleton key={index} />) : foods.map((food) => <FoodCard food={food} />)}
    </div>
  );
}
