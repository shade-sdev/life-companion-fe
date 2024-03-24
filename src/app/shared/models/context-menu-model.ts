import {IconName} from "@ng-icons/core";

export interface ContextMenus {
  menus: Array<ContextMenuModel>;
}

export interface ContextMenuModel {
  id?: string;
  name: string;
  iconName?: IconName;
  type: MenuItemType;
  action?: () => void;
  link?: string;
}

export enum MenuItemType {
  LINK,
  CHECKBOX
}
