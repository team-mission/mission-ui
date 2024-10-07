import { cn } from '@/utils/style';

const Skeleton = ({ className }: { className?: string }) => {
  return <div className={cn('animate-pulse bg-gray-2', className)} />;
};

export default Skeleton;
