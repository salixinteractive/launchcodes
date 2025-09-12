import type { Route } from "./+types/game";
import { Welcome } from "../welcome/welcome";
import { Lobby } from "../lobby/lobby";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Game() {
  return (
    <div>
      <Lobby />
    </div>
  );
}
