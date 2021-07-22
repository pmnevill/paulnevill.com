import {Component, OnInit, Renderer2} from '@angular/core';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  darkMode = true;
  localStorageDarkMode = 'paulnevill-dark-mode';

  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
    this.darkMode = coerceBooleanProperty(localStorage.getItem(this.localStorageDarkMode));

    this.updateTheme();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.updateTheme();
  }

  updateTheme(disableSpecialTheme = true) {
    localStorage.setItem(this.localStorageDarkMode, this.darkMode.toString());
    if (this.darkMode) {
      this.renderer.addClass(document.body, 'dark-theme');
      this.renderer.removeClass(document.body, 'light-theme');
    } else {
      this.renderer.addClass(document.body, 'light-theme');
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }

}
