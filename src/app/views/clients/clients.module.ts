import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { NewClientComponent } from './new-client/new-client.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { LottieModule } from "ngx-lottie";

@NgModule({
  declarations: [ClientListComponent, ClientDetailsComponent, NewClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    LottieModule
  ]
})
export class ClientsModule { }
