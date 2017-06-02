import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	showSecret = false;
	clickLog = [];
	timeLog = [];
	clicks = 0;

	onTogglePassword(){
		this.showSecret=!this.showSecret;
		this.clicks += 1;
		this.clickLog.push(this.clicks);
		this.timeLog.push(new Date());
	}

	getColor(item){
		if(item>= 5) {
			return 'blue'
		} else {
			return 'inherit'
		}
	}
}
