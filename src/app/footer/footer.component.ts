import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  developerName = 'Ghemes Paul';
  displayData:string;
  constructor(public dateService : DataSericeProvider) { }

  ngOnInit() {
    //this.displayData = this.dateService.getCurrentDate();
    this.dateService.getCurrentDateWithPromise().then(
      (value) =>  {this.displayData = value;},
      (error) => {console.log("Error " + error)}
    );
  }

}
