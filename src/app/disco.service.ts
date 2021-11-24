import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Disco } from './disco.model';

@Injectable({
  providedIn: 'root',
})
export class discoService {
  discoList: Disco[] = JSON.parse(localStorage.getItem('discos')) || [
    {
      name: 'Malamaña',
      description: 'Lugar con salsa brava para disfrutar de la noche.',
      url: 'https://caracoltv.brightspotcdn.com/dims4/default/b30f7c9/2147483647/strip/true/crop/1000x716+0+0/resize/1000x716!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2Fd2%2Fb9%2F7d3930fb40cfa88ca4e847c53ed9%2Fmala-mana-salsa-bar-discoteca-de-cali.jpg',
      email: 'malamania@gmail.com',
      price: '5000',
      range: 'barato',
    },
  ];

  discoEmitter: Subject<Disco[]> = new Subject<Disco[]>();

  getAllDiscos() {
    return this.discoList.slice();
  }

  addANewDisco(newDisco: Disco) {
    this.discoList = this.discoList.concat(newDisco);
    localStorage.setItem('discos', JSON.stringify(this.discoList));
  }

  deleteItem(name: string) {
    const index = this.discoList.findIndex((disco) => disco.name === name);
    if (index === -1) return this.discoList;
    this.discoList = this.discoList.filter((disco) => disco.name !== name);
    if (this.discoList.length === 0) {
      localStorage.removeItem('discos');
    } else {
      localStorage.setItem('discos', JSON.stringify(this.discoList));
    }
    return this.discoList;
  }
}
