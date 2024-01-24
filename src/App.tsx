import AppLayout from './layout/AppLayout.tsx';
// import Expenses from './pages/expenses.tsx';
import Home from './pages/home.tsx';

function App() {
  return (
    <AppLayout>
      <Home />
      {/* <Expenses /> */}
    </AppLayout>
  );
}

export default App;
