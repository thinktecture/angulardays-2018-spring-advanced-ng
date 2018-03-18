import {Component, ElementRef, HostBinding, Input, NgZone, OnInit, Renderer2} from '@angular/core';

let zIndex = 0;
let id = 0;

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  private _left: number = (id % 20 + 1) * 20 + 30;
  private _top: number = (id % 20 + 1) * 20 + 30;
  private _previousLeft: number;
  private _previousTop: number;

  @Input()
  public data: any;

  @HostBinding('style.zIndex')
  public zIndex: number;

  public id: number;

  public get left(): string {
    return `${this._left}px`;
  }

  public get top(): string {
    return `${this._top}px`;
  }

  public onMouseDown(event: MouseEvent) {
    this._previousLeft = event.clientX;
    this._previousTop = event.clientY;
    this.zIndex = ++zIndex;
  }

  public onMouseMove(event: MouseEvent) {
    if (event.buttons === 1 && this._previousLeft && this._previousTop) {
      this._left += event.clientX - this._previousLeft;
      this._previousLeft = event.clientX;

      this._top += event.clientY - this._previousTop;
      this._previousTop = event.clientY;

      this.updateStyles();
    }
  }

  public updateStyles() {
    this._renderer.setStyle(this._elementRef.nativeElement, 'left', this.left);
    this._renderer.setStyle(this._elementRef.nativeElement, 'top', this.top);
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2, ngZone: NgZone) {
    this.id = ++id;
    this.zIndex = ++zIndex;

    ngZone.runOutsideAngular(() => {
      _renderer.listen(_elementRef.nativeElement, 'mousedown', evt => this.onMouseDown(evt));
      _renderer.listen(_elementRef.nativeElement, 'mousemove', evt => this.onMouseMove(evt));
    });
  }

  public ngOnInit() {
    this.updateStyles();
  }

}
