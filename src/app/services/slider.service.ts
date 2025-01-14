import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor() {}
  
  slides = [
    {
      src: 'assets/images/s1.svg',
      thumbnail: 'assets/images/s1.svg',
      alt: 'شلالات إجوازو (Iguazu Falls)',
      location: 'الأرجنتين والبرازيل',
      title: 'شلالات إجوازو (Iguazu Falls) - الأرجنتين والبرازيل',
      description: 'مجموعة مذهلة من الشلالات تمتد على الحدود بين الأرجنتين والبرازيل...',
    },
    {
      src: 'assets/images/s2.svg',
      thumbnail: 'assets/images/s2.svg',
      alt: 'جبل ماترهورن',
      location: 'سويسرا وإيطاليا',
      title: 'جبل ماترهورن (Matterhorn) - سويسرا وإيطاليا',
      description: 'أحد أشهر القمم الجبلية في العالم...',
    },
    // Add other slides...
  ];

  currentSlideIndex = 0;
  visibleCount = 5;
  isSlideClicked = false;

  getCurrentSlide() {
    return this.slides[this.currentSlideIndex];
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  setVisibleCount(count: number) {
    this.visibleCount = count;
  }

  getVisibleSlides() {
    return this.slides.slice(
      this.currentSlideIndex,
      this.currentSlideIndex + this.visibleCount
    );
  }

 
}
