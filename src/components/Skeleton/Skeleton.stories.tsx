import { Meta, StoryObj } from '@storybook/react';

import Skeleton from './Skeleton';

type ButtonStory = StoryObj<typeof Skeleton>;

const meta: Meta<typeof Skeleton> = {
  title: 'common/Skeleton',
  component: Skeleton,
};

export default meta;

export const Overviews: ButtonStory = {
  render: () => (
    <section className="flex flex-col gap-24">
      <div className="flex items-end gap-12">
        <Skeleton className="h-30 w-30 rounded-8" />
        <Skeleton className="h-50 w-50 rounded-8" />
        <Skeleton className="h-75 w-75 rounded-10" />
        <Skeleton className="h-124 w-124 rounded-12" />
        <Skeleton className="h-150 w-150 rounded-12" />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <Skeleton className="h-14 w-200 rounded-20" />
          <Skeleton className="h-14 w-50 rounded-20 bg-gray-4" />
          <Skeleton className="h-14 w-100 rounded-20" />
          <Skeleton className="h-14 w-150 rounded-20" />
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-14 w-330 rounded-20" />
          <Skeleton className="h-14 w-180 rounded-20 bg-gray-4" />
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-14 w-50 rounded-20 bg-gray-4" />
          <Skeleton className="h-14 w-90 rounded-20" />
          <Skeleton className="h-14 w-45 rounded-20" />
          <Skeleton className="h-14 w-100 rounded-20" />
          <Skeleton className="h-14 w-200 rounded-20" />
        </div>
      </div>
    </section>
  ),
};
