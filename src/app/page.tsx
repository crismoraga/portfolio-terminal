import ClientTerminal from '@/components/ClientTerminal';
import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorFallback from '@/components/ErrorFallback';

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <ErrorBoundary fallback={<ErrorFallback />}>
        <ClientTerminal />
      </ErrorBoundary>
    </div>
  );
}
