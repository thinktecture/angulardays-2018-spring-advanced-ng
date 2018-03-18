import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  public boxes: any[] = [];

  public addBox() {
    this.boxes.push({});
  }

  public addBoxes(amount: number) {
    for (let i = 0; i < amount; i++) {
      this.addBox();
    }
  }

}
