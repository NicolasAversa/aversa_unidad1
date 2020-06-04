import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name;
  age;
  imgUrl =
    'https://lh3.googleusercontent.com/proxy/mGNNgpQIrA96FRvILAn5Kg80ixeBfyWpqUhi_XHqPeKDhQEDTsNORpVgb5glA4KYHnsOJzybWeDgC6wGJ8-BYkwZ7C2_VEXKU5TyE1ZRVOxTgMM';
  darkMode = false;

  constructor() {}

  ngOnInit(): void {}
}
