import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-restart-dialog',
  templateUrl: './restart-dialog.component.html',
  styleUrls: ['./restart-dialog.component.less']
})
export class RestartDialogComponent {
  constructor() {
  }

  // @ts-ignore
  @Input() mode: string;

  modes: string[] = ['Picture Viewer', 'Memory Game'];
}
