import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from './users.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
	user1Activated = false;
	user2Activated = false;
	userActivatedSub: Subscription;

	constructor(private usersService: UsersService){

	}

	ngOnInit() {
		this.userActivatedSub = this.usersService.userActivated.subscribe(
			(id: number) => {
				switch (id) {
					case 1:
						this.user1Activated = true;
						this.user2Activated = false;
						break;
					case 2: 
						this.user1Activated = false;
						this.user2Activated = true;
						break;					
					default:
						this.user1Activated = false;
						this.user2Activated = false;
						break;
				}
			}
		);
	}

	ngOnDestroy(){
		this.userActivatedSub.unsubscribe();
	}
}
