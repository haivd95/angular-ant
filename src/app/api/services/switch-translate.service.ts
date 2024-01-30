
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class ChangeLanguageService {
  constructor(public translate: TranslateService) { }

  public changeLanguage(language: string) {
    this.translate.use(language)
  }

}
