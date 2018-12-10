import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {delay, map} from 'rxjs/operators';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.less']
})
export class Section1Component implements OnInit {

  svgList = ['android',
    'apple',
    'atlassian',
    'atom',
    'bootstrap',
    'code',
    'css',
    'docker',
    'ember',
    'git',
    'ionic',
    'java',
    'javascript',
    'linux',
    'nativescript',
    'terminal',
    'sap',
    'coffee'];
  svgs1 = [];
  svgs2 = [];
  svgs3 = [];

  constructor() {
  }

  ngOnInit() {
    this.reloadSvgList(1);
    interval(5000).subscribe(n => {
        this.svgs1 = [];
        this.reloadSvgList(1);
      }
    );
    // interval(5000).pipe().subscribe(n => {
    //     this.svgs2 = [];
    //     this.reloadSvgList(2);
    //   }
    // );
    // interval(5000).pipe(delay(3000)).subscribe(n => {
    //     this.svgs3 = [];
    //     this.reloadSvgList(3);
    //   }
    // );
  }

  reloadSvgList(svgListIndex) {
    this.svgList.forEach(svgName => {

      const svg = {
        class: 'svg-' + svgName,
        left: this.generateRandomWidth(),
        top: this.generateRandomHeight()
      };
      switch (svgListIndex) {
        case 1:
          this.svgs1.push(svg);
          break;
        case 2:
          this.svgs2.push(svg);
          break;
        case 3:
          this.svgs2.push(svg);
          break;
      }
    });
  }

  generateRandomWidth() {
    return Math.floor(Math.random() * (window.innerWidth - 50));
  }

  generateRandomHeight() {
    return Math.floor(Math.random() * (window.innerHeight - 50));
  }

}
