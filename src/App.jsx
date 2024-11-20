import Card from './components/Card';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-row gap-6">
        <Card number={1} />
        <Card number={2} />
        <Card number={3} />
      </div>

      <Pagination />
    </div>
  );
}

export default App;
