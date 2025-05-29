import React from "react";
import { Card, CardContent } from "@mui/material";
import { Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';

const products = [
  {
    id: 1,
    title: "گوشی شیائومی Redmi Note 13",
    price: 12500000,
    image: "https://dkstatics-public.digikala.com/digikala-products/2d5673.jpg",
    category: "دیجیتال",
  },
  {
    id: 2,
    title: "ریمل ضدآب بورژوا",
    price: 420000,
    image: "https://dkstatics-public.digikala.com/digikala-products/bourjois.jpg",
    category: "آرایشی",
  },
  {
    id: 3,
    title: "تیشرت نخی مردانه",
    price: 320000,
    image: "https://dkstatics-public.digikala.com/digikala-products/tshirt.jpg",
    category: "پوشاک",
  },
  {
    id: 4,
    title: "غذای خشک سگ",
    price: 580000,
    image: "https://dkstatics-public.digikala.com/digikala-products/dogfood.jpg",
    category: "حیوانات خانگی",
  },
];

function formatPrice(price) {
  return price.toLocaleString("fa-IR") + " تومان";
}

export default function TrendifyStore() {
  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "24px" }}>
        فروشگاه ترندیفای
      </h1>
      <p style={{ marginBottom: "16px", color: "#555" }}>
        جدیدترین و پرفروش‌ترین کالاهای ایران
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        {products.map((product) => (
          <Card key={product.id} style={{ borderRadius: "16px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "192px", objectFit: "cover", borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}
            />
            <CardContent>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "8px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {product.title}
              </h2>
              <p style={{ color: "green", fontWeight: "bold", marginBottom: "12px" }}>
                {formatPrice(product.price)}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Button variant="outlined" startIcon={<ShoppingCartIcon />} size="small">
                  افزودن به سبد
                </Button>
                <StarIcon style={{ color: "#fbc02d" }} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
