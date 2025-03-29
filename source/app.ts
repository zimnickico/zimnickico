import { serve } from "bun";
import index from "./routes/index.html";

const app = serve({
  port: 3000,
  development: true,
  routes: {
    "/": index,
  },
});

console.log("App Started", app.url.host);
