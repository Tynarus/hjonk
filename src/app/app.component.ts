import { Component } from '@angular/core';
import { version } from '../../config';

@Component({
    selector: 'hj-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private readonly versionNumber: string = version;

    public constructor() {}

    public get version(): string {
        return this.versionNumber;
    }
}
