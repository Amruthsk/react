import { lazy, Suspense } from "react";

export default function Preview({ path }) {
  const Component = lazy(() => import(`./lessons/${path}.jsx`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}
