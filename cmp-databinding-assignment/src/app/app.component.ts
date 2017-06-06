import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	oddNumbers: number[] = [];
	evenNumbers: number[] = [];

	onGameTick(tick){
		if (tick % 2 === 0) {
			this.evenNumbers.push(tick);
		}
		else {
			this.oddNumbers.push(tick);
		}
	}
}
