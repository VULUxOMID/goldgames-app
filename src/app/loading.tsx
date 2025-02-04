export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <div className="w-8 h-8 border-4 border-black/[.08] dark:border-white/[.145] border-t-foreground rounded-full animate-spin" />
      <p className="mt-4 text-sm text-black/60 dark:text-white/60">Loading...</p>
    </div>
  );
}