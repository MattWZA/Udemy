import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component ({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	constructor(private dataStorageService: DataStorageService) {}

	onSaveData() {
	  this.dataStorageService.storeRecipes().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
	  this.dataStorageService.storeShoppingList().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onFetchData() {
	  this.dataStorageService.fetchRecipes();
	  this.dataStorageService.fetchShoppingList();
  }

}
