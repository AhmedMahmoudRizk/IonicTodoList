import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { from } from 'rxjs';
import { Events, IonItem } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class TranslaklteService {
  defaultLang = 'en';

  constructor(private translate: TranslateService, public events: Events,
  ) {
    this.init();
  }


  init() {
    this.translate.setDefaultLang(this.getDefaultLanguage());
  }
  // set default language to en
  getDefaultLanguage() {
    // let language = 'en';
    // if (this.defaultLang !== '') {
    // language = this.defaultLang;
    // } else {
    //   this.defaultLang = 'en';
    // }
    // return language;
    return this.defaultLang;
  }
  // setting language
  setLanguage(setLang) {
    this.defaultLang = setLang;
    this.translate.use(setLang);
    // update menu
    this.events.publish('language', setLang);

  }


}

