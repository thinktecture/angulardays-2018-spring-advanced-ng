import {Injectable} from '@angular/core';

@Injectable()
export abstract class CameraService {
  public abstract getPicture(): Promise<string>;
}
