import { FC, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { MemberCreateForm } from './MemberCreateForm';
import { MemberCreateFormSkelton } from './Skeleton';

export const MemberCreateFormBoundary: FC = () => {
  return (
    <ErrorBoundary fallback={<>Error発生</>}>
      <Suspense fallback={<MemberCreateFormSkelton />}>
        <MemberCreateForm />
      </Suspense>
    </ErrorBoundary>
  );
};
