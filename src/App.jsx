import { useState } from 'react';

function App() {
  const mess = [
    "Learn React",
    "Apply for jobs",
    "Invest your new income"
  ];

  const [step, setStep] = useState(0); // Initialize the step to 0, which aligns with array indices

  function handlePrev() {
    setStep(prev => Math.max(prev - 1, 0)); // Prevent going below 0 (first element)
  }

  function handleNext() {
    setStep(prev => Math.min(prev + 1, mess.length - 1)); // Prevent going beyond array bounds
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="bg-gray-100 p-12 rounded-2xl shadow-lg">
        {/* Card Section */}
        <div className="flex flex-row gap-6 justify-center mb-8">
          <div className={`flex justify-center items-center p-6 rounded-full w-20 h-20 shadow-md text-center ${step >= 0 ? "bg-blue-500" : ""}`}>
            <h3 className="text-3xl font-semibold">1</h3>
          </div>
          <div className={`flex justify-center items-center p-6 rounded-full w-20 h-20 shadow-md text-center ${step >= 1 ? "bg-blue-500" : ""}`}>
            <h3 className="text-3xl font-semibold">2</h3>
          </div>
          <div className={`flex justify-center items-center p-6 rounded-full w-20 h-20 shadow-md text-center ${step >= 2 ? "bg-blue-500" : ""}`}>
            <h3 className="text-3xl font-semibold">3</h3>
          </div>
        </div>

        {/* Message Section */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg text-center text-gray-800">
          <p className="text-lg font-medium">{mess[step]}</p>
        </div>

        {/* Pagination Section */}
        <div className="flex justify-between items-center mt-6 w-full max-w-xs">
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition" 
            onClick={handlePrev} 
            disabled={step === 0} // Disable when at the first step
          >
            Previous
          </button>
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition" 
            onClick={handleNext} 
            disabled={step === mess.length - 1} // Disable when at the last step
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
