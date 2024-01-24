import { MenuConfigItem } from "./api/models/menu-config.model";

export const MenuConfigNavigate: MenuConfigItem[] = [
  {
    name: 'Dashboard',
    rootPath: '',
    icon: 'pie-chart',
    menuChild: []
  },
  {
    name: 'List',
    rootPath: '',
    icon: 'user',
    menuChild: [
      {
        name: 'Products',
        rootPath: './products',
        icon: 'user'
      },
      {
        name: 'Posts',
        rootPath: './posts',
        icon: 'pie-chart'
      }
    ]
  }
];
