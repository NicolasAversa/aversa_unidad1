import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nombre = 'Juancito';

  handleChangeName() {
    this.nombre = 'Holaaa';
  }

  constructor() {}

  ngOnInit(): void {}
}
