import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PictureComponent } from './picture/picture.component';
import { CameraService } from './camera.service';
import {MobileCameraService} from './mobile-camera.service';
import {DesktopCameraService} from './desktop-camera.service';

@NgModule({
  declarations: [
    AppComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: CameraService,
    useFactory: CameraServiceFactory
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function CameraServiceFactory() {
  return window['cordova'] ? new MobileCameraService() : new DesktopCameraService();
}
