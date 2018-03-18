import { Component } from '@angular/core';
import {CameraService} from '../camera.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {

  public source: string;

  constructor(private _cameraService: CameraService) { }

  public takePhoto(): void {
    this._cameraService.getPicture()
      .then(source => this.source = source);
  }

}
