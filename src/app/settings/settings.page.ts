import { Component, OnInit } from '@angular/core';
import { TranslaklteService } from '../translate.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  selectedLanguage: string;

  constructor(private translateConfigService: TranslaklteService) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();

  }

  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }
  ngOnInit() {
  }

}