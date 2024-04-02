import {Component, HostListener, signal, WritableSignal} from "@angular/core";

@Component({
  standalone: true,
  template: ''
})
export class ContextMenuUtil {

  public shown: WritableSignal<boolean> = signal(false);
  public elementId?: string;
  public triggerId?: string;

  public init(shown: WritableSignal<boolean>, elementId: string, triggerId: string) {
    this.shown = shown;
    this.elementId = elementId;
    this.triggerId = triggerId;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const ulElement = document.getElementById(this.elementId!);
    const triggerElement = document.getElementById(this.triggerId!);

    if (!(triggerElement && triggerElement?.contains(clickedElement)) && !(ulElement?.contains(clickedElement))) {
      this.shown?.set(false);
    }
  }

  public triggerMenu() {
    this.shown?.set(!this.shown());
  }

}
