function Transfer() {
  const user = JSON.parse(localStorage.getItem('login'));
  const userBalance = user ? user.balance : 0;
  return (
    <div className="w-screen m-6 items-center h-screen flex flex-col justify-center bg-gray-100">
      <div className="flex">
        <p className="text-black font-bold text-5xl mb-6 flex">Transfer</p>
      </div>
      <div className="w-2/5 bg-white rounded-2xl shadow-md p-6 ">
        <form className="space-y-4">
          {/* Input To */}
          <div className="flex items-center justify-center py-6">
            <label
              className="block text-gray-700 font-medium mb-2 mr-4"
              htmlFor="to"
            >
              To
            </label>
            <input
              id="to"
              name="to"
              type="text"
              placeholder="Pilih nomor rekening"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              style={{ backgroundColor: '#FAFBFD', color: 'black' }}
            />
          </div>

          {/* Input Amount */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              id="amount"
              name="amount"
              type="number"
              placeholder="Contoh: Rp100.000,00"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              style={{ backgroundColor: '#FAFBFD', color: 'black' }}
            />
          </div>

          {/* Balance */}
          <div className="text-sm text-gray-500">
            Balance:
            <span className="text-teal-600 font-medium">{` Rp${userBalance.toLocaleString()}`}</span>
          </div>

          {/* Notes */}
          <div className="flex items-center justify-center py-6 ">
            <label
              className="block text-gray-700 font-medium mb-2 mr-4"
              htmlFor="notes"
            >
              Notes
            </label>
            <input
              id="notes"
              name="notes"
              type="text"
              placeholder="Add notes (optional)"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              style={{ backgroundColor: '#FAFBFD', color: 'black' }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-md mt-4 transition duration-300"
          >
            Transfer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Transfer;
