import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
	@Output('onGameTick') gameTick = new EventEmitter<number>();
	ticks: number = 0;
	intervalRef;

  constructor() { }

  ngOnInit() {
  }

	onStart(){
		this.intervalRef = setInterval(() => {
			this.ticks += 1;
			this.gameTick.emit(this.ticks);
		}, 1000)
	}

	onStop(){
		clearInterval(this.intervalRef);
	}

}
