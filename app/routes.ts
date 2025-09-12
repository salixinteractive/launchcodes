import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/game.tsx"),
  route("new", "routes/newItem.tsx"),
  route("items/:id", "routes/item.tsx")
] satisfies RouteConfig;
