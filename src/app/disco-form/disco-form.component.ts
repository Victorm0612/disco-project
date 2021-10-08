import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterState } from '@angular/router';
import { Disco } from '../disco.model';
import { discoService } from '../disco.service';

@Component({
  selector: 'app-disco-form',
  templateUrl: './disco-form.component.html',
  styleUrls: ['./disco-form.component.scss'],
})
export class DiscoFormComponent implements OnInit {
  discoForm: FormGroup;
  constructor(private discoService: discoService, private router: Router) {}

  ngOnInit(): void {
    this.discoForm = new FormGroup({
      discoName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      description: new FormControl('', Validators.required),
      image: new FormControl('', [
        Validators.required,
        Validators.pattern(
          'https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,}'
        ),
      ]),
      email: new FormControl('', Validators.email),
      price: new FormControl('', Validators.required),
      rangePrice: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    const newDisco: Disco = {
      name: this.discoForm.value.discoName,
      description: this.discoForm.value.description,
      price: this.discoForm.value.price,
      email: this.discoForm.value.email,
      url: this.discoForm.value.image,
      range: this.discoForm.value.rangePrice,
    };
    this.discoService.addANewDisco(newDisco);
    this.router.navigate(['/']);
  }

  isValid(inputName: string) {
    return (
      !this.discoForm.get(inputName).valid &&
      this.discoForm.get(inputName).touched
    );
  }
}
