import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import productsRouter from "./routes/products";

type Bindings = {
  DATABASE_URL: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use("*", logger());
app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (c) => {
  return c.json({
    message: "Products CRUD API - Prueba Técnica Frontend",
    version: "1.0.0",
    stack: "Cloudflare Workers + Hono + Drizzle ORM + Neon",
  });
});

app.route("/api/products", productsRouter);

app.notFound((c) => c.json({ error: "Ruta no encontrada" }, 404));

app.onError((err, c) => {
  console.error(err);
  return c.json({ error: "Error interno del servidor" }, 500);
});

export default app;
