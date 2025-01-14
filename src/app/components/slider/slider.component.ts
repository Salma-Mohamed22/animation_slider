import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../services/slider.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  imports: [
    CommonModule
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit{

  isSlideClicked!: boolean;
  slides:any[] | undefined
  currentSlideIndex!:number

  constructor(public sliderService: SliderService) {}

  ngOnInit(): void {
    this.isSlideClicked = this.sliderService.isSlideClicked;
    this.slides = this.sliderService.slides;
    this.currentSlideIndex= this.sliderService.currentSlideIndex;
  }

  onSliderContentClick(index:number): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides!.length;
    this.isSlideClicked = true;
  }
  
  nextSlide() {
    this.sliderService.nextSlide();
  }

  prevSlide() {
    this.sliderService.prevSlide();
  }
  
}
