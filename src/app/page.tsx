import ClientTerminal from '@/components/ClientTerminal';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function Home() {
  return (
    <div className="min-h-screen p-4">
      <ErrorBoundary fallback={
        <div className="text-center p-10">
          <h1 className="text-xl error mb-4">Error al cargar el terminal</h1>
          <p className="mb-4">Ha ocurrido un problema al inicializar la aplicación.</p>
          <button 
            className="terminal-mode-button"
            onClick={() => window.location.reload()}
          >
            Recargar página
          </button>
        </div>
      }>
        <ClientTerminal />
      </ErrorBoundary>
    </div>
  );
}
