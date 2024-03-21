import {IconName} from "@ng-icons/core";

export interface Sidebar {
  appIconUrl: string,
  sidebars: Array<SidebarItem>
}

export interface SidebarItem {
  title: string,
  icon: IconName,
  active: boolean,
  authorities: Array<string>,
  url: string
}
