import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDrawersInterface } from 'src/app/interfaces/matdrawers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userProfile: MatDrawersInterface[] = [
    {
      "displayName": "Customer Add",
      "routeName": "customerAdd"
    },
    {
      "displayName": 'Customer View',
      "routeName": 'customerView'
    }
  ];

  constructor(private route_: Router) { }

  ngOnInit() { }

  loadUserInformationComponent(componentName: string) {
    console.log(componentName)
    this.route_.navigate([
      `${componentName.toLowerCase()}`,
    ]);

  }

}
