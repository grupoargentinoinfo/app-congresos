import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  title: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {

      let element = document.getElementById('toggle-button')
      
      if(element.attributes.getNamedItem('aria-expanded').value === "true"){
        element.click()
      }
      
    })

  }

}
