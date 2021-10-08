import { Component, OnInit } from '@angular/core';
import { Disco } from '../disco.model';
import { discoService } from '../disco.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  discoList: Disco[];
  constructor(private discoService: discoService) {}

  ngOnInit(): void {
    this.discoList = this.discoService.getAllDiscos();
  }
}
