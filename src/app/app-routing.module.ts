import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './view/not-found/not-found.component';


const routes: Routes = [
    {
        path: 'modern-software',
        loadChildren: () => import('./view/modern-software/modern-software.module').then(m => m.ModernSoftwareModule)
    },
    {
        path: '',
        loadChildren: () => import('./view/home/home.module').then(m => m.HomeModule)
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
