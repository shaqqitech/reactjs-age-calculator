import React, { useState, useEffect } from "react";

const AgeCalculator = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState(null);

  useEffect(() => {
    if (day && month && year) {
      const interval = setInterval(() => {
        const birthday = new Date(`${year}-${month}-${day}`);
        const currentDate = new Date();

        const diff = currentDate - birthday;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor(
          (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44)
        );
        const days = Math.floor(
          (diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
        );
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setAge({ years, months, days, hours, minutes, seconds });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [day, month, year]);

  const handleDayChange = (event) => {
    setDay(event.target.value);
    setAge(null);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
    setAge(null);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
    setAge(null);
  };

  return (
    <div className="w-full min-h-screen  p-10 text-center bg-gray-800 text-white font-Rajdhani lg:space-y-8">
      <h1 className="text-3xl font-semibold mb-4">Age Calculator</h1>
      <div className="mb-4 flex justify-center space-x-2">
        <input
          type="number"
          placeholder="Day"
          className="appearance-none border rounded w-20 sm:w-24 md:w-28 lg:w-48 sm:h-10 md:h-16 lg:h-20 sm:text-sm md:text-lg lg:text-2xl font-bold text-center py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 "
          value={day}
          onChange={handleDayChange}
        />
        <input
          type="number"
          placeholder="Month"
          className="appearance-none border rounded w-20 sm:w-24 md:w-28 lg:w-48 sm:h-10 md:h-16 lg:h-20 sm:text-sm md:text-lg lg:text-2xl font-bold text-center py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 "
          value={month}
          onChange={handleMonthChange}
        />
        <input
          type="number"
          placeholder="Year"
          className="appearance-none border rounded w-28 sm:w-24 md:w-28 lg:w-48 sm:h-10 md:h-16 lg:h-20 sm:text-sm md:text-lg lg:text-2xl font-bold text-center py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 "
          value={year}
          onChange={handleYearChange}
        />
      </div>
      <div>
        {age && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(age).map(([unit, value]) => (
              <div key={unit} className="p-4 border rounded shadow-lg">
                <p className="text-xl font-semibold">{value}</p>
                <p className="text-gray-500">{unit}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCalculator;
