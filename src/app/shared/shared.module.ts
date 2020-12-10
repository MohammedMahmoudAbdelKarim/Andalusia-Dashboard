import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, MatMenuModule, TranslateModule.forChild()],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
