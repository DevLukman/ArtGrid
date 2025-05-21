/* eslint-disable react/prop-types */
import React from "react";
import { formatCurrency } from "../../utils/helpers";
const Receipt = React.forwardRef(
  ({ cart, total, userEmail, paymentId }, ref) => {
    const date = new Date().toLocaleString();
    return (
      <div className="pb-[50px]">
        <div ref={ref} style={styles.container}>
          <h2 style={styles.header}>ArtGrid Purchase Receipt ✔</h2>

          <p style={styles.detail}>
            <strong>Date:</strong> {date}
          </p>
          <p style={styles.detail}>
            <strong>User Email:</strong> {userEmail}
          </p>
          <p style={styles.detail}>
            <strong>Payment ID:</strong> {paymentId}
          </p>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Artwork Name</th>
                <th style={styles.th}>Price (NGN)</th>
                <th style={styles.th}>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td style={styles.td}>{item.name}</td>
                  <td style={styles.td}>{formatCurrency(item.price)}</td>
                  <td style={styles.td}>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p style={styles.total}>
            <strong>Total:</strong> ${total}
          </p>
        </div>
      </div>
    );
  },
);
Receipt.displayName = "Receipt";

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    width: "100%",
    maxWidth: "600px",
    margin: "auto",
    marginTop: "50px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fdfdfd",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
    color: "#333",
  },
  detail: {
    margin: "8px 0",
    fontSize: "14px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  th: {
    borderBottom: "1px solid #ccc",
    padding: "8px",
    textAlign: "left",
    backgroundColor: "#f0f0f0",
  },
  td: {
    padding: "8px",
    borderBottom: "1px solid #eee",
  },
  total: {
    marginTop: "20px",
    textAlign: "right",
    fontSize: "16px",
  },
};

export default Receipt;
