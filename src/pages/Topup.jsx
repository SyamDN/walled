import useFetch from '../hooks/useFetch';

function Topup() {
  const user = JSON.parse(localStorage.getItem('login'));
  const userBalance = user ? user.balance : 0;
  return (
    <div className="w-screen m-6 items-center h-screen flex flex-col justify-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-black">Top Up</h2>
      <div className="w-2/5 bg-white rounded-2xl shadow-md p-6">
        <div className="mb-4 text-black">
          <p className="font-medium">Amount</p>
          <p className="text-3xl font-bold">
            {userBalance ? `Rp${userBalance.toLocaleString()}` : 'Rp ********'}
          </p>
        </div>
        <div className="flex flex-col mb-4 text-black">
          <p className=" flex font-medium">From</p>
          <div className="flex items-center justify-between bg-gray-100 rounded-md p-2">
            <p>Credit Card</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-medium text-black">Notes</p>
          <textarea
            className="w-full border-gray-300 bg-gray-100 rounded-md p-2 text-black"
            rows={3}
            placeholder="Enter notes (optional)"
          ></textarea>
        </div>
        <button className="bg-teal-500 text-white font-medium rounded-md py-2 px-4 w-full">
          Transfer
        </button>
      </div>
    </div>
  );
}

export default Topup;
