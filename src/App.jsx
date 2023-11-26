function App() {
  return (
    <>
      <h1 className="text-center text-2xl underline underline-offset-4 decoration-sky-500 ">
        StayEase
      </h1>
      <div className="top flex gap-2 items-center justify-center mt-4 ">
        <div className="box">
          <p>Mile Rate</p>
          <strong>55.55</strong>
        </div>
        <div className="box">
          <p>Total Spend</p>
          <strong>55.55</strong>
        </div>
        <div className="box">
          <p>Total Mile</p>
          <strong>55.55</strong>
        </div>
      </div>
      <div className="details">
        <section className="text-gray-600 body-font ">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-4">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                Details
              </h1>
            </div>
            <div className="lg:w-2/3 w-full mx-auto ">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                      Name
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Deposit Money
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Mile
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Price
                    </th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3">Efaz</td>
                    <td className="px-4 py-3">1500$</td>
                    <td className="px-4 py-3">15</td>
                    <td className="px-4 py-3 text-lg text-gray-900">1200$</td>
                    <td className="w-10 text-center">300</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Alamin</td>
                    <td className="px-4 py-3">1500$</td>
                    <td className="px-4 py-3">15</td>
                    <td className="px-4 py-3 text-lg text-gray-900">1200$</td>
                    <td className="w-10 text-center">300</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Romiz</td>
                    <td className="px-4 py-3">1500$</td>
                    <td className="px-4 py-3">15</td>
                    <td className="px-4 py-3 text-lg text-gray-900">1200$</td>
                    <td className="w-10 text-center">300</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Hridoy</td>
                    <td className="px-4 py-3">1500$</td>
                    <td className="px-4 py-3">15</td>
                    <td className="px-4 py-3 text-lg text-gray-900">1200$</td>
                    <td className="w-10 text-center">300</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Jubayer</td>
                    <td className="px-4 py-3">1500$</td>
                    <td className="px-4 py-3">15</td>
                    <td className="px-4 py-3 text-lg text-gray-900">1200$</td>
                    <td className="w-10 text-center">300</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
