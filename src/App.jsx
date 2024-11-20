import Card from './components/Card';
import Message from './components/Message';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="bg-gray-100 p-12 rounded-2xl shadow-lg">
        <div className="flex flex-row gap-6 justify-center mb-8">
          <Card number={1} />
          <Card number={2} />
          <Card number={3} />
        </div>
        <Message />
        <Pagination />
      </div>
    </div>
  );
}

export default App;
