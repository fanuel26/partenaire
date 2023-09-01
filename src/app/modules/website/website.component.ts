import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {
  header: boolean = false;
  footer: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    // alert(this.router.url)
    if (this.router.url == '/') {
      this.header = true
      this.footer = false
    }
  }

}
