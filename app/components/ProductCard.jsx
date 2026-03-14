export default function ProductCard({ product, addToCart, t }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "15px"
    }}>
      <img
        src={product.image}
        alt={product.name}
        width="100%"
      />

      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <strong>${product.price}</strong>

      <button
        onClick={() => addToCart(product)}
        style={{
          marginTop: "10px",
          width: "100%",
          padding: "10px",
          cursor: "pointer"
        }}
      >
        {t.add}
      </button>
    </div>
  );
}
