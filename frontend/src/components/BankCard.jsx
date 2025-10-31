const BankCard = ({ bank} ) => {
  return (
   < div>
    <div className=" rounded-lg flex items-center justify-start gap-4 p-1 shadow-md cursor-pointer bg-white transform transition-transform duration-[1000ms] hover:-translate-y-2">
      {/* Bank Logo (Left Side) */}
      <img
        src={bank.img}
        alt={bank.name}
        className="w-16 h-16 object-contain"
      />

      {/* Bank Name (Right Side) */}
      <h3 className="font-medium text-lg text-gray-800">{bank.name}</h3>
    </div>
    
    </div>
  );
};

export default BankCard;
