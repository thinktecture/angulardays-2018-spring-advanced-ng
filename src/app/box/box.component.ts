import {Component, OnInit, HostBinding, Input, HostListener, ElementRef, Renderer2, NgZone} from '@angular/core';

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

  @HostBinding('style.left')
  public get left(): string {
    return `${this._left}px`;
  }

  @HostBinding('style.top')
  public get top(): string {
    return `${this._top}px`;
  }

  @HostListener('mousedown', ['$event'])
  public onMouseDown(event: MouseEvent) {
    this._previousLeft = event.clientX;
    this._previousTop = event.clientY;
    this.zIndex = ++zIndex;
  }

  @HostListener('mousemove', ['$event'])
  public onMouseMove(event: MouseEvent) {
    if (event.buttons === 1 && this._previousLeft && this._previousTop) {
      this._left += event.clientX - this._previousLeft;
      this._previousLeft = event.clientX;

      this._top += event.clientY - this._previousTop;
      this._previousTop = event.clientY;
    }
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2, ngZone: NgZone) {
    this.id = ++id;
    this.zIndex = ++zIndex;

    // TODO: Combine ElementRef and Renderer to replace the decorators for left, top, onMouseDown, onMouseMove above.
    // TODO: Run the mousedown and mousemove operations outside of the NgZone.
  }

  public ngOnInit() {
  }

}
