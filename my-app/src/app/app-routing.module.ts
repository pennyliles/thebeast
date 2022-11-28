import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIpslogComponent } from './components/add-ipslog/add-ipslog.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { IpslogDetailsComponent } from './components/ipslog-details/ipslog-details.component';
import { IpslogListComponent } from './components/ipslog-list/ipslog-list.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'ipslog', component: IpslogListComponent },
  { path: 'ipslog/:id', component: IpslogDetailsComponent },
  { path: 'addIPS', component: AddIpslogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
