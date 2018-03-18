import { Component } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {

  public source: string;

  // TODO: Inject the abstract camera service here.
  constructor() { }

  public takePhoto(): void {
    // TODO: Use the abstract camera service here and set the source
  }

}
