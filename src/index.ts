import { Elysia } from "elysia";

const port = Number(process.env.PORT) || 3000;

export const app = new Elysia()
  .get("/", () => ({
    message: "Welcome to Elysia + Drizzle + MySQL API",
    status: "ok",
  }))
  .get("/health", () => ({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  }))
  .listen(port);

console.log(`🦊 Server is running at http://${app.server?.hostname}:${app.server?.port}`);

