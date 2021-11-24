import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Disco } from '../disco.model';
import { discoService } from '../disco.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  discoList: Disco[];
  private activatedSub: Subscription;
  constructor(private discoService: discoService) {}

  ngOnInit(): void {
    this.discoList = this.discoService.getAllDiscos();
    this.activatedSub = this.discoService.discoEmitter.subscribe(
      (allDiscos) => (this.discoList = allDiscos)
    );
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
