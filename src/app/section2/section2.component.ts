import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.less']
})
export class Section2Component implements OnInit {

  @ViewChild('elements') elements: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  addAnimation() {
    this.renderer.addClass(this.elements.nativeElement, 'fadeInUp');
  }

}
