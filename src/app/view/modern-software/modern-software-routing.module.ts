import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModernSoftwareComponent } from './modern-software.component';

const routes: Routes = [
    {
        path: '',
        component: ModernSoftwareComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModernSoftwareRoutingModule {
}
