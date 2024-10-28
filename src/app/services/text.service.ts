import { Injectable } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  public texts: UserText[] = [];
  private TEXT_STORAGE: string = 'texts';

  constructor() {}

  
  public async addNewText(content: string) {
    
    const fileName = Date.now() + '.txt';

   
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: content,
      directory: Directory.Documents, 
      encoding: Encoding.UTF8
    });

    
    
    const newText: UserText = {
      filepath: fileName,
      content: content
    };
    this.texts.unshift(newText);

    
    Preferences.set({
      key: this.TEXT_STORAGE,
      value: JSON.stringify(this.texts),
    });
  }

  
  public async loadSavedTexts() {
    
    const { value } = await Preferences.get({ key: this.TEXT_STORAGE });
    this.texts = (value ? JSON.parse(value) : []) as UserText[];

    for (let text of this.texts) {
        
        const readFile = await Filesystem.readFile({
          path: text.filepath,
          directory: Directory.Documents,
          encoding: Encoding.UTF8 
        });
        
        text.content = readFile.data as string; 
      }
  }
}


export interface UserText {
  filepath: string;
  content: string;
}
