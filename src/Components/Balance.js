const Balance = ({ revenueSum, spendingSum }) => {
  const calculateBalance = () => {
    if (revenueSum > spendingSum) {
      return `Możesz jeszcze wydać ${revenueSum - spendingSum} zł`;
    } else if (spendingSum > revenueSum) {
      return `Bilans jest ujemny. Jesteś na minusie ${
        spendingSum - revenueSum
      } zł`;
    } else {
      return "Bilans wynosi zero.";
    }
  };

  return (
    <div id="balance" className="balance">
      {calculateBalance()}
    </div>
  );
};

export default Balance;
