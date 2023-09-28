import AppProvider from './hooks';
import AppRoutes from './routes';
import GlobalSytle from './styles/global';
function App() {
  return (
    <>
      <GlobalSytle />
      <AppProvider>
        <AppRoutes/>
      </AppProvider>
    </>
  );
}

export default App;