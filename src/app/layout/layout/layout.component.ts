import { BreakpointObserver } from "@angular/cdk/layout";
import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";
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
  @ViewChild(MatSidenav, { static: false })
  sidenav!: MatSidenav;
  // Show Splash
  showSplash$: Observable<boolean> = this.dataShare.showSplash$;
  // Get Direction
  direction: string = "";
  direction$: Observable<string> = this.dataShare.locale$.pipe(
    map((locale: Locale) => locale.dir)
  );
  // Get lang
  lang: string = "";
  // Default Theme
  isDarkTheme: boolean = false;
  // Toggle Full Screen
  isFullScreen: boolean = false;
  elem: any;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private dataShare: DataShareService,
    public translate: TranslateService,
    private observer: BreakpointObserver
  ) {}

  ngOnInit() {
    this.elem = document.documentElement;
    this.translate.addLangs(["en", "ar"]);
    this.dataShare.locale$.subscribe((locale: Locale) => {
      this.translate.setDefaultLang(locale.lang);
      this.lang = locale.lang;
    });
  }
  ngAfterViewInit() {
    this.observer.observe(["(max-width: 800px)"]).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = "over";
        this.sidenav.close();
      } else {
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
    });
  }

  // FullScreen
  fullScreen() {
    this.isFullScreen = true;
    let elem = document.documentElement;
    let methodToBeInvoked =
      elem.requestFullscreen ||
      elem["mozRequestFullscreen"] ||
      elem["msRequestFullscreen"];
    if (methodToBeInvoked) methodToBeInvoked.call(elem);
  }
  // Cancel FullScreen
  closeFullScreen() {
    this.isFullScreen = false;
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }
}
