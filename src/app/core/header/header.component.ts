import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentLanguage: string ;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    /* let's set up english as default language */
    this.translate.setDefaultLang('en');

    /* let's use the browser language */
    this.currentLanguage = this.translate.getBrowserLang() ;

    /* check if the browser language is not french or english then use english  */
    if ( ! this.currentLanguage.match(/en|fr/) )
      this.currentLanguage = 'en';
    /* let's use the language  */
    this.translate.use(this.currentLanguage);
  }
  /* switch language function */
  ChangeLang(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
  }

}
