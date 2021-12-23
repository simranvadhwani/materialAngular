import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'figForm';
  selectedFW = new FormControl();
  frameworks: string[] = ['bmw', 'ww', 'Vue'];
}
