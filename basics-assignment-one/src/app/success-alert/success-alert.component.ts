import { Component } from '@angular/core';

@Component({
	selector: 'app-success-alert',
	template: `<div class="alert alert-success">{{msg}}</div>`
})
export class SuccessAlertComponent {
	msg = "Success alert is successful";
}