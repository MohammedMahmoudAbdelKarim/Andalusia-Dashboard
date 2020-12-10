import { NewClientComponent } from './new-client/new-client.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientListComponent } from './client-list/client-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: ClientListComponent
  },
  {
    path: 'client-details', component: ClientDetailsComponent
  },
  {
    path: 'new-client', component: NewClientComponent
  },
  {
    path: 'update-client', component: NewClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
