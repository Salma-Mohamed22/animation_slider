import { Component, Input } from '@angular/core';
import { SliderService } from '../../services/slider.service';

@Component({
  selector: 'app-slider-view',
  imports: [],
  templateUrl: './slider-view.component.html',
  styleUrl: './slider-view.component.css'
})
export class SliderViewComponent {
  
  constructor(public sliderService: SliderService) {}
}
