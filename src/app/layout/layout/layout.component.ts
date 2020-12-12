import {
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Locale } from "src/app/shared/interfaces/localeInterface";
import { DataShareService } from "src/app/shared/services/dataShare.service";
@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
})
export class LayoutComponent implements OnInit {
  // Get control of media  and side-menu responsive ...
  @ViewChild("control", { static: false }) control;
  // Get menu button to toggle responsive ...
  @ViewChild("button", { static: false }) button;
  // Listen to any change happen in window resizing ...
  @HostListener("window:resize", ["$event"])
  onResize() {
    let mobile = window.matchMedia("(min-width: 240px) and (max-width: 425px)");
    let tablet = window.matchMedia("(min-width: 426px) and (max-width: 768px)");
    mobile.matches || tablet.matches ? this.closeNav() : this.openNav();
  }
  showSplash$: Observable<boolean> = this.dataShare.showSplash$;
  // Get Direction
  direction: string = "";
  direction$: Observable<string> = this.dataShare.locale$.pipe(
    map((locale: Locale) => locale.dir)
  );

  // Get lang
  lang: string = "";

  constructor(
    private dataShare: DataShareService,
    public translate: TranslateService
  ) {}

  navClosed = false;

  ngOnInit() {
    this.translate.addLangs(["en", "ar"]);
    this.dataShare.locale$.subscribe((locale: Locale) => {
      this.translate.setDefaultLang(locale.lang);
      this.lang = locale.lang;
    });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.onResize();
    this.direction$.subscribe((data) => {
      this.direction = data;
      if (this.direction == "rtl" && this.navClosed) {
        this.button.nativeElement.style.left = "1070px";
      } else if (this.direction != "rtl" && this.navClosed) {
        this.button.nativeElement.style.left = "250px";
      }
      if (this.direction == "rtl" && !this.navClosed) {
        this.button.nativeElement.style.left = "1070px";
      } else if (this.direction != "rtl" && !this.navClosed) {
        this.button.nativeElement.style.left = "250px";
      }
    });
  }

  toggleMenu() {
    this.navClosed ? this.openNav() : this.closeNav();
  }

  openNav() {
    this.navClosed = false;
    this.control.nativeElement.style.display = "flex";
    if (this.direction == "rtl") {
      this.button.nativeElement.style.left = "1070px";
    } else this.button.nativeElement.style.left = "250px";
  }

  closeNav() {
    this.navClosed = true;
    this.control.nativeElement.style.display = "none";
    if (this.direction == "rtl") {
      this.button.nativeElement.style.left = "1295px";
    } else this.button.nativeElement.style.left = "30px";
  }
}
