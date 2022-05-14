import {Component, OnInit} from '@angular/core';
import {
  WordpressService
} from "@luciddev/wordpress/application/angular";

@Component({
  selector: 'luciddev-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{
  constructor(private wpService: WordpressService) {}

  ngOnInit() {
    this.wpService.getAllPosts();
  }


}
