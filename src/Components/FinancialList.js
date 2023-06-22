export const FinancialList = ({ items, onDelete, onEdit, mode }) => {
  return (
    <div className="details">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>{item.amount}</span>
            <button onClick={() => onEdit(item.id, mode)}>edytuj</button>
            <button onClick={() => onDelete(item.id, mode)}>usuń</button>
          </li>
        ))}
      </ul>
      <div className="summary">
        <span>Suma:</span>
        <span>{calcSum(items)}</span>
        <span>zł</span>
      </div>
    </div>
  );
};
