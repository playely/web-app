import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Component({
    selector: 'app-base',
    template: '<div></div>'
})
export class BaseComponent implements OnDestroy {
    protected destroy$: Subject<void> = new Subject<void>();

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}