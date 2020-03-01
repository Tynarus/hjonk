import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { NotFoundComponent } from './not-found.component';


@NgModule({
    declarations: [NotFoundComponent],
    exports: [NotFoundComponent],
    imports: [
        CommonModule,
        MatDividerModule
    ]
})
export class NotFoundModule {
}
