const Card = ({ number }) => {
  return (
    <div className="flex justify-center items-center bg-gray-200 p-6 rounded-full w-20 h-18 shadow-md text-center">
      <h3 className="text-3xl font-semibold">{number}</h3>
    </div>
  );
};

export default Card;
