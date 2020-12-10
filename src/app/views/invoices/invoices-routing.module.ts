import { AllInvovicesComponent } from "./all-invovices/all-invovices.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateInvoiceComponent } from "./create-invoice/create-invoice.component";

const routes: Routes = [
  {
    path: "",
    component: AllInvovicesComponent,
  },
  {
    path: "create-invoice",
    component: CreateInvoiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoicesRoutingModule {}
