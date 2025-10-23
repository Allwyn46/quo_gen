import { EventManagerPlugin } from '@angular/platform-browser';

export class PreventDefaultEventPlugin extends EventManagerPlugin {
  override supports(eventName: string): boolean {
    return eventName.endsWith('.prevent');
  }

  override addEventListener(element: HTMLElement, eventName: string, handler: Function): Function {
    const orginalEventname = eventName.split('.')[0];
    return this.manager.addEventListener(element, orginalEventname, (e: Event) => {
      e.preventDefault();
      handler(e);
    });
  }
}
