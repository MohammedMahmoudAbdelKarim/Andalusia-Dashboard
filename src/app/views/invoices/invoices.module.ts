import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InvoicesRoutingModule } from "./invoices-routing.module";
import { AllInvovicesComponent } from "./all-invovices/all-invovices.component";
import { CreateInvoiceComponent } from "./create-invoice/create-invoice.component";

@NgModule({
  declarations: [AllInvovicesComponent, CreateInvoiceComponent],
  imports: [CommonModule, InvoicesRoutingModule],
})
export class InvoicesModule {}
