import { HomeView } from "../views/homeview/HomeView";
import { CharactersView } from "../views/homeview/CharactersView";

export const ROUTES = [
  {
    label: "HOME",
    path: "/",
    element: <HomeView />,
    id: "Home",
    inNav: true
  },
  {
    label: "Characters",
    path: "/characters",
    element: <CharactersView />,
    id: "Characters",
    inNav: true
  }
];
