export class CounterService {
	sentToInactive: number = 0;
	sentToActive: number = 0;

	addToInactiveCount(){
		this.sentToInactive++;		
    console.log('Sent to inactive: ' + this.sentToInactive);
	}

	addToActiveCount(){
		this.sentToActive++;
    console.log('Sent to active: ' + this.sentToActive);
	}
}