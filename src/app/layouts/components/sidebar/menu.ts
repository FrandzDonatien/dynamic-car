import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
  {
    id: 0,
    label: 'menu',
    isTitle: true,
  },
  {
    id: 1,
    label: 'dashboards',
    icon: 'monitor-dot',
    link: '/home'
  },
  {
    id: 2,
    label: 'apps',
    isTitle: true,
  },
  {
    id: 3,
    label: "Vehicules",
    icon: "car",
    link: "/vehicles",
    subItems: [
      {
        id: 4,
        label: "vehicles List",
        icon: "list",
        link: "/products/list",
        parentId: 3,
      },
      {
        id: 5,
        label: "vehicles Add",
        icon: "copy-plus",
        link: "/products/add",
        parentId: 3,
      },
    ],
  },
  {
    id: 6,
    label: "Paremetre",
    icon: "bar-chart",
    isTitle: true,
  },
  {
    id: 3,
    label: "Categories",
    icon: "chart-column-stacked",
    link: "categories",
  },
  {
    id: 4,
    label: "Marques",
    icon: "square-dashed",
    link: "/vehicles",
  }

]
