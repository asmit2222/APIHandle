import React, { useState, useEffect } from "react";

function Team() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-center text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Meet our Team
            </h2>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {data.map((item) => (
              <li key={item.id}>
                <div className="flex items-center  gap-x-6">
                  <img
                    className="size-20 rounded-full"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-sm/6 font-semibold text-gray-600">
                      <span className="font-bold text-blue-500">Email: </span>
                      {item.email}
                    </p>
                    <p className="text-sm/6 font-semibold text-gray-600">
                      <span className="font-bold text-blue-500">Address: </span>
                      {item.address.street},{item.address.city}
                    </p>
                    <p className="text-sm/6 font-semibold text-gray-600">
                      <span className="font-bold text-blue-500">Work at: </span>
                      {item.company.name}
                    </p>
                    <p className="text-sm/6 font-semibold text-gray-600">
                      <span className="font-bold text-blue-500">Contact: </span>
                      {item.phone}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Team;
