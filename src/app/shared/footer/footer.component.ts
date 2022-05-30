import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { LanguageService } from 'src/app/services/language/language.service';
import { ILanguage } from 'src/app/services/language/models/language';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  languageControl: FormControl;
  languagesList: ILanguage[] = [];
  constructor(private languageService: LanguageService) {
    this.languagesList = this.languageService.getAvailableLanguages();
    const currentLanguage = this.languageService.getCurrentLanguage();
    this.languageControl = new FormControl(currentLanguage.key);
   }

  ngOnInit(): void {
  }

  /**
   * Handle language change
   * @param event 
   */
   handleLanguageChange(event:  MatSelectChange): void {
    this.languageService.changeLanguage(event.value);
  }
}
