import React from "react";

const products = [
  {
    id: 1,
    title: "گوشی شیائومی Redmi Note 13",
    price: 12500000,
    image: "https://dkstatics-public.digikala.com/digikala-products/2d5673.jpg",
  },
  {
    id: 2,
    title: "ریمل ضدآب بورژوا",
    price: 420000,
    image: "https://dkstatics-public.digikala.com/digikala-products/bourjois.jpg",
  },
  {
    id: 3,
    title: "تیشرت نخی مردانه",
    price: 320000,
    image: "https://dkstatics-public.digikala.com/digikala-products/tshirt.jpg",
  },
  {
    id: 4,
    title: "غذای خشک سگ",
    price: 580000,
    image: "https://dkstatics-public.digikala.com/digikala-products/dogfood.jpg",
  },
];

function formatPrice(price) {
  return price.toLocaleString("fa-IR") + " تومان";
}

export default function App() {
  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "auto" }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 24 }}>
        فروشگاه ترندیفای
      </h1>
      <p style={{ marginBottom: 16, color: "#555" }}>
        جدیدترین و پرفروش‌ترین کالاهای ایران
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              borderRadius: 16,
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              overflow: "hidden",
              backgroundColor: "white",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: 192,
                objectFit: "cover",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              }}
            />
            <div style={{ padding: 16 }}>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  marginBottom: 8,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {product.title}
              </h2>
              <p
                style={{ color: "green", fontWeight: "bold", marginBottom: 12 }}
              >
                {formatPrice(product.price)}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    border: "1px solid #4CAF50",
                    padding: "6px 12px",
                    borderRadius: 8,
                    background: "white",
                    cursor: "pointer",
                  }}
                >
                  🛒 افزودن به سبد
                </button>
                <span style={{ color: "#fbc02d", fontSize: 20 }}>★</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}