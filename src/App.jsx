import { useState } from "react";
function App() {
  const [showBazarFrom, setShowBazarFrom] = useState(false);

  const toggleBazarForm = () => {
    setShowBazarFrom(!showBazarFrom);
  };
  return (
    <main className="w-sm px-4 border  mx-auto min-h-screen">
      <div className="wrapper">
        <h1 className="text-center text-2xl underline underline-offset-8 decoration-sky-500 ">
          StayEase
        </h1>
        <div className="top flex gap-2 items-center justify-center mt-4 ">
          <div className="box">
            <p>Mile Rate</p>
            <strong>55.55</strong>
          </div>
          <div className="box">
            <p>Total Spend</p>
            <strong>6000$</strong>
          </div>
          <div className="box">
            <p>Total Mile</p>
            <strong>108</strong>
          </div>
        </div>
        {/* ======================= Bazar Form start =================== */}
        <div className="input  flex justify-center gap-9 mt-5">
          <button onClick={toggleBazarForm} className="btn bg-emerald-600">
            Add Bazar
          </button>
          <button className="btn bg-pink-600">Add Meal</button>
        </div>
        {showBazarFrom && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded p-8 max-w-md relative">
              <h2 className="text-2xl mb-4">Add Bazar</h2>
              <form>
                {/* Add your form fields here */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name
                  </label>

                  <select
                    id="name"
                    name="name"
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="" disabled selected>
                      Select Your Name
                    </option>
                    <option value="Efaz">Efaz</option>
                    <option value="Romiz">Romiz</option>
                    <option value="Alamin">Alamin</option>
                    <option value="Hridoy">Hridoy</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="date"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="420 taka"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="list"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Bazar List
                  </label>
                  <textarea
                    type="date"
                    id="list"
                    name="list"
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="1. rice 5kg = 250"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="amount"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Total Amount
                  </label>
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="420 taka"
                  />
                </div>
                {/* Add more form fields as needed */}
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </form>
              <button
                className="absolute top-0 right-0 mt-2 mr-2  bg-rose-500  text-white px-2 py-1 rounded  hover:text-gray-800"
                onClick={toggleBazarForm}
              >
                X
              </button>
            </div>
          </div>
        )}

        {/* ======================= Bazar Form End =================== */}

        <div className="details text-center mt-5">
          <section className="text-gray-600 body-font ">
            <div className="container  mx-auto">
              <div className="flex flex-col text-center w-full mb-4">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                  Details
                </h1>
              </div>
              <div className="w-full mx-auto ">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className="border border-gray-300 px-1 py-2">Name</th>
                      <th className="border border-gray-300 px-1 py-2">
                        Deposit Money
                      </th>
                      <th className="border border-gray-300 px-1 py-2">Mile</th>
                      <th className="border border-gray-300 px-1 py-2">
                        Price
                      </th>
                      <th className="border border-gray-300 px-1 py-2">
                        Balance
                      </th>
                      {/* Add more header columns if needed */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-2">Efaz</td>
                      <td className="border border-gray-300 px-2 py-2">
                        1600$
                      </td>
                      <td className="border border-gray-300 px-2 py-2">45</td>
                      <td className="border border-gray-300 px-2 py-2">
                        1200$
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-green-600">
                        + 300$
                      </td>
                      {/* Add more data columns if needed */}
                    </tr>

                    {/* Add more rows if needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
