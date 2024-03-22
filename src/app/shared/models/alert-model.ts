import {IconName} from "@ng-icons/core";

export enum AlertType {
  SUCCESS,
  WARNING,
  ERROR
}

export class Alert {
  class!: string;
  textClass!: string;
  buttonClass!: string;
  type!: AlertType;
  rightIcon!: AlertIcon;
  leftIcon!: AlertIcon
}

export class AlertIcon {
  color!: string;
  icon!: IconName;
  size!: string;
}

export class Notification {
  id!: string;
  message!: string;
  alertType!: AlertType;
  alert!: Alert;

  constructor(message: string, alertType: AlertType) {
    this.message = message;
    this.id = this.generateId();
    this.alertType = alertType;
    this.alert = this.alerts[alertType];
  }

  generateId(): string {
    return Math.random().toString(36).substring(2);
  }

  alerts: { [key in AlertType]: Alert } = {
    [AlertType.SUCCESS]: {
      type: AlertType.SUCCESS,
      class: 'rounded-md p-4 m-4 top-4 right-4 z-50 bg-green-50 shadow-lg ring-1 ring-black ring-opacity-5',
      textClass: 'text-sm font-medium text-green-800',
      buttonClass: 'inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none',
      leftIcon: {
        size: '1.3rem',
        icon: 'heroCheckCircleSolid',
        color: 'text-green-600'
      },
      rightIcon: {
        size: '1.3rem',
        icon: 'heroXMarkSolid',
        color: 'text-green-600'
      }
    },
    [AlertType.WARNING]: {
      type: AlertType.WARNING,
      class: 'rounded-md p-4 m-4 top-4 right-4 z-50 bg-yellow-50 shadow-lg ring-1 ring-black ring-opacity-5',
      textClass: 'text-sm font-medium text-yellow-800',
      buttonClass: 'inline-flex rounded-md bg-yellow-50 p-1.5 text-yellow-500 hover:bg-yellow-100 focus:outline-none',
      leftIcon: {
        size: '1.3rem',
        icon: 'heroExclamationTriangleSolid',
        color: 'text-yellow-600'
      },
      rightIcon: {
        size: '1.3rem',
        icon: 'heroXMarkSolid',
        color: 'text-yellow-600'
      }
    },
    [AlertType.ERROR]: {
      type: AlertType.ERROR,
      class: 'rounded-md p-4 m-4 top-4 right-4 z-50 bg-red-50 shadow-lg ring-1 ring-black ring-opacity-5',
      textClass: 'text-sm font-medium text-red-800',
      buttonClass: 'inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none',
      leftIcon: {
        size: '1.3rem',
        icon: 'heroXCircleSolid',
        color: 'text-red-600'
      },
      rightIcon: {
        size: '1.3rem',
        icon: 'heroXMarkSolid',
        color: 'text-red-600'
      }
    }
  };
}
