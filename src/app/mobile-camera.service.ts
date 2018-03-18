import {Injectable} from '@angular/core';

// TODO: Extend this class to inherit your abstract base camera service

@Injectable()
export class MobileCameraService {

  public getPicture(): Promise<string> {
    return new Promise((resolve, reject) => {
      const removeDomListener = () => {
        document.removeEventListener('deviceready', onCordovaDeviceReady);
      };

      const onCordovaDeviceReady = () => {
        const camera = window.navigator['camera'];

        const options = {
          quality: 50,
          destinationType: camera.DestinationType.DATA_URL,
          sourceType: camera.PictureSourceType.CAMERA,
          encodingType: camera.EncodingType.PNG,
          saveToPhotoAlbum: false,
          correctOrientation: true
        };

        camera.getPicture(imageData => {
          removeDomListener();
          resolve('data:image/png;base64,' + imageData);
        }, error => {
          removeDomListener();
          reject(error);
        }, options);
      };

      document.addEventListener('deviceready', onCordovaDeviceReady);
    });
  }

}
