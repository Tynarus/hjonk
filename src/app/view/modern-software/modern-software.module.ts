import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModernSoftwareRoutingModule } from './modern-software-routing.module';
import { ModernSoftwareComponent } from './modern-software.component';

@NgModule({
    declarations: [ModernSoftwareComponent],
    imports: [
        CommonModule,
        ModernSoftwareRoutingModule
    ]
})
export class ModernSoftwareModule {
}
