import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TenantComponent } from './components/tenant-information/tenant/tenant.component';
import { PropertyComponent } from './components/property-information/property/property.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      { path: 'tenant', component: TenantComponent},
      { path: 'property', component: PropertyComponent },
      { path: '', redirectTo: 'tenant', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
