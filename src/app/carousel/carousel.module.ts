import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';  // Adjust the path accordingly

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule { }
