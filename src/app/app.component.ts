import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Movie-App';

  searchForm = new FormGroup({
    s: new FormControl('', Validators.required),
  });

  constructor(private router: Router) {

  }

  onSubmit() {
    this.router.navigate(['/search', this.searchForm.value.s]);
    console.warn(this.searchForm.value.s);
  }
}
