import useFetch from '../hooks/useFetch';

function TransactionTable() {
  const [transactions] = useFetch('http://localhost:3000/transactions'); // Fetch data

  if (!transactions) {
    return <p>Loading transactions...</p>; // Placeholder saat data belum tersedia
  }

  return (
        <div className="w-full px-16 mt-12">
      <table className="w-full text-left border-collapse border border-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-2 border border-gray-300 text-black">
              Date & Time
            </th>
            <th className="p-2 border border-gray-300 text-black">Type</th>
            <th className="p-2 border border-gray-300 text-black">From / To</th>
            <th className="p-2 border border-gray-300 text-black">
              Description
            </th>
            <th className="p-2 border border-gray-300 text-black">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-gray-100">
              <td className="p-2 border border-gray-300 text-black">
                {transaction.dateTime}
              </td>
              <td className="p-2 border border-gray-300 text-black">
                {transaction.type}
              </td>
              <td className="p-2 border border-gray-300 text-black">
                {transaction.fromTo}
              </td>
              <td className="p-2 border border-gray-300 text-black">
                {transaction.description}
              </td>
              <td
                className={`p-2 border border-gray-300 font-bold ${
                  transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {transaction.amount > 0
                  ? `+ ${transaction.amount.toLocaleString()}`
                  : `- ${Math.abs(transaction.amount).toLocaleString()}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
