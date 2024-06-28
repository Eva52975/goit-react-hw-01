import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((obj) => {
          return (
            <tr key={obj.id}>
              <td className={css.item}>{obj.type}</td>
              <td className={css.item}>{obj.amount}</td>
              <td className={css.item}>{obj.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
