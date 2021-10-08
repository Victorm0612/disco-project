import { Component, Input, OnInit } from '@angular/core';
import { Disco } from '../disco.model';
import { discoService } from '../disco.service';

@Component({
  selector: 'app-disco-card',
  templateUrl: './disco-card.component.html',
  styleUrls: ['./disco-card.component.scss'],
})
export class DiscoCardComponent implements OnInit {
  @Input() disco: Disco;
  priceRange = {
    barato: '$',
    medio: '$$',
    caro: '$$$',
  };
  constructor(private discoService: discoService) {}

  ngOnInit(): void {}

  deleteDisco() {
    this.discoService.deleteItem(this.disco.name);
  }
}
