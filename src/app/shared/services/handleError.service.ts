import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Locale } from "../interfaces/localeInterface";
import { DataShareService } from "./dataShare.service";

@Injectable({
  providedIn: "root",
})
export class HandleErrorService {
  direction: string = "";
  // Get Direction
  direction$: Observable<string> = this.dataShare.locale$.pipe(
    map((locale: Locale) => locale.dir)
  );
  constructor(private dataShare: DataShareService) {}

  // Displaying Forms Validation Messages
  public getFormValidationMessage(form: FormGroup, input: string): string {
    this.direction$.subscribe((dir) => {
      console.log(dir);
      this.direction = dir;
    });
    if (form.get(input).hasError("required")) {
      if (this.direction == "rtl") {
        return "هذا الحقل مطلوب !";
      } else {
        return "This Field is required !";
      }
    }
  }

  // Form Validation Messages for *ngIf
  public showValidationError(form: FormGroup, input: string): boolean {
    return !form.get(input).valid && form.get(input).touched;
  }

  // Handling backend custom error messages
  public handleBackendValidations(error: HttpErrorResponse) {
    const errors = {};

    for (const key in error.error.errors) {
      if (Object.prototype.hasOwnProperty.call(error.error.errors, key)) {
        errors[key] = error.error.errors[key];
      }
    }
  }
}
