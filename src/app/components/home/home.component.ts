import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  slides = [
    {
      src: 'assets/images/s1.svg',
      thumbnail: 'assets/images/s1.svg',
      alt: 'شلالات إجوازو (Iguazu Falls)',
      location: 'الأرجنتين والبرازيل',
      title: 'شلالات إجوازو (Iguazu Falls) - الأرجنتين والبرازيل',
      description: 'مجموعة مذهلة من الشلالات تمتد على الحدود بين الأرجنتين والبرازيل، محاطة بالغابات الاستوائية الكثيفة. تُعد واحدة من أعظم عجائب الطبيعة، حيث تتدفق المياه بقوة وسط ضباب ساحر.'
    },
    {
      src: 'assets/images/s2.svg',
      thumbnail: 'assets/images/s2.svg',
      alt: 'جبل ماترهورن',
      location: 'سويسرا وإيطاليا',
      title: 'جبل ماترهورن (Matterhorn) - سويسرا وإيطاليا',
      description: 'أحد أشهر القمم الجبلية في العالم، يتميز بشكله الهرمي المهيب وقممه المغطاة بالثلوج. تحيط به المراعي الخضراء والبحيرات النقية، مما يجعله وجهة خيالية لعشاق الجبال.'
    },
    {
      src: 'assets/images/s3.svg',
      thumbnail: 'assets/images/s3.svg',
      alt: 'وادي القمر',
      location: 'الأردن',
      title: '"وادي القمر" او وادي رم (Wadi Rum) - الأردن',
      description: 'صحراء ساحرة تعرف باسم "وادي القمر"، تحتوي على تشكيلات صخرية فريدة وكثبان رملية حمراء. يعتبر المكان مثاليًا لاستكشاف الطبيعة والتأمل تحت سماء مليئة بالنجوم.'
    },
    {
      src: 'assets/images/s4.svg',
      thumbnail: 'assets/images/s4.svg',
      alt: 'جزيرة سكاي',
      location: 'اسكتلندا',
      title: 'جزيرة سكاي (Isle of Skye) - اسكتلندا',
      description: 'جزيرة خلابة تشتهر بالمناظر الطبيعية الدرامية، من الجبال والوديان إلى البحيرات والشواطئ. توفر تجربة استثنائية لمحبي المغامرات والمشي في الطبيعة.'
    },
    {
      src: 'assets/images/s5.svg',
      thumbnail: 'assets/images/s5.svg',
      alt: 'غابة الأمازون المطيرة',
      location: 'أمريكا الجنوبية',
      title: 'غابة الأمازون المطيرة (Amazon Rainforest) - أمريكا الجنوبية',
      description: 'أكبر غابة استوائية في العالم، موطن لأنواع لا حصر لها من النباتات والحيوانات. تتميز بتنوعها الحيوي الهائل، وشلالاتها الخفية، وأنهارها العظيمة مثل نهر الأمازون.'
    }
  ];

  currentSlideIndex = 0;
  isSlideClicked: boolean = false;
  slideInterval: any;
  visibleSlides: any[] = [];
  visibleCount = 5; // Default visible count
  animationTrigger = false;



  ngOnInit(): void {
    // Start automatic slide change every 3 seconds
    this.startSlideShow();
    this.updateVisibleSlides();
    this.updateVisibleCount();

  }

  ngOnDestroy(): void {
    // Cleanup interval when the component is destroyed
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

   // Adjust visibleCount on window resize
   @HostListener('window:resize', ['$event'])
   onResize(): void {
     this.updateVisibleCount();
     this.updateVisibleSlides();
   }
 
   updateVisibleCount(): void {
     const screenWidth = window.innerWidth;
    //  this.visibleCount = screenWidth <= 1000 ? 4 : 5;
      if (screenWidth <= 430) {
        this.visibleCount = 2;
      } else if (screenWidth <= 630) {
        this.visibleCount = 3;
      } else if (screenWidth <= 1000) {
        this.visibleCount = 4;
      } else {
        this.visibleCount = 5; // Default for larger screens
      }
   }
 
   updateVisibleSlides(): void {
     this.visibleSlides = this.slides.slice(
       this.currentSlideIndex,
       this.currentSlideIndex + this.visibleCount
     );
   }

   
  startSlideShow(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 6000); // Change slide every 3 seconds (3000 ms)
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    this.isSlideClicked = false;
  }

  onSliderContentClick(index:number): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    this.isSlideClicked = true;
  }

  prevSlide(): void {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }

}
