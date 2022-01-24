import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerViewComponent } from './components/customer-view/customer-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customerView',
    pathMatch: 'full'
  },
  { path: 'customerAdd', component: CustomerAddComponent },
  { path: 'customerView', component: CustomerViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
