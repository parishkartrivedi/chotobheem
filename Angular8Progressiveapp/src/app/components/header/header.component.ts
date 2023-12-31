import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sarthak-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public queryTerm:string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitHandler(evt){
    evt.preventDefault();

    this.router.navigate(['/movies'],{queryParams:{q:this.queryTerm}});
  }

}
