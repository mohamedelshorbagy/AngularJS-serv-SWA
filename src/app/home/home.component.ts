import { Component, OnInit } from '@angular/core';
import { JsonplaceService } from '../jsonplace.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[JsonplaceService]
})
export class HomeComponent implements OnInit {


  users:any;

  constructor(private place:JsonplaceService) { }





  ngOnInit() {

    this.place.fetchData().subscribe((data) => {
        this.users = data;
   
    });

  }

}
