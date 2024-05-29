import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { SliderComponent } from '../../shared/slider/slider.component';
import { FooterComponent } from './../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,SliderComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
