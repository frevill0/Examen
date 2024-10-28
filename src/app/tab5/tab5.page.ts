import { Component } from '@angular/core';
import { TextService } from '../services/text.service';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  newText: string = ''; 

  constructor(public textService: TextService) {}

  addTextToStorage() {
    if (this.newText.trim().length > 0) {
      this.textService.addNewText(this.newText);
      this.newText = ''; 
    }
  }
  

  async ngOnInit() {
    await this.textService.loadSavedTexts(); 
  }
}
