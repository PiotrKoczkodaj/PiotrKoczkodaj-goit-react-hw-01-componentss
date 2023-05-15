import styles from './TransactionHistory.module.css';
import PropTypes from "prop-types";

export const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.transactionHistory}>
  <thead>
                <tr className={styles.header}>
      <th >Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <tbody className={styles.data}>
                {items.map(item => (
                <tr key={item.id}>
                        <td>{ item.type}</td>
                        <td>{ item.amount}</td>
                        <td>{ item.currency}</td>
                </tr>  
                ))}
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired
}