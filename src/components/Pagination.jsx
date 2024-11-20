const Pagination = () => {
  return (
    <div className="flex justify-between items-center mt-6 space-x-20">
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
        Previous
      </button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
        Next
      </button>
    </div>
  );
};

export default Pagination;
