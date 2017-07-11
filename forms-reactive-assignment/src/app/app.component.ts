import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  projectForm: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished'];
  defaultStatus = this.statuses[0];


  ngOnInit() {
    this.projectForm = new FormGroup({
      'name': new FormControl(null, [Validators.required], CustomValidators.asyncForbiddenNames),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(this.defaultStatus)
    });
  }



  onSubmit() {
    console.log(this.projectForm.value);

    this.projectForm.reset({
      'status': this.defaultStatus
    });
  }

}
