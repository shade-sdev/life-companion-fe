import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, take, timer} from "rxjs";
import {AlertType, Notification} from "../models/alert-model";

@Injectable()
export class AlertService {

  private _notifications = new BehaviorSubject<Notification[]>([]);

  notifications$: Observable<Notification[]> = this._notifications.asObservable();

  public success(message: string, autoDismiss = true, dismissTimeout = 5000) {
    const notification = new Notification(message, AlertType.SUCCESS);
    this._notifications.next([...this._notifications.value, notification]);
    this.autoDimiss(notification.id, autoDismiss, dismissTimeout);
  }

  public warn(message: string, autoDismiss = true, dismissTimeout = 5000) {
    const notification = new Notification(message, AlertType.WARNING);
    this._notifications.next([...this._notifications.value, notification]);
    this.autoDimiss(notification.id, autoDismiss, dismissTimeout);
  }

  public error(message: string, autoDismiss = true, dismissTimeout = 5000) {
    const notification = new Notification(message, AlertType.ERROR);
    this._notifications.next([...this._notifications.value, notification]);
    this.autoDimiss(notification.id, autoDismiss, dismissTimeout);
  }

  public dismiss(id: string) {
    const currentNotifications = this._notifications.value;
    const updatedNotifications = currentNotifications.filter(n => n.id !== id);
    if (currentNotifications.length !== updatedNotifications.length) {
      this._notifications.next(updatedNotifications);
    }
  }

  private autoDimiss(id: string, autoDimiss: boolean, dismissTimeout: number) {
    if (autoDimiss) {
      timer(dismissTimeout)
        .pipe(take(1))
        .subscribe(() => {
          this.dismiss(id);
        });
    }
  }

}
