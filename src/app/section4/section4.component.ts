import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {of, timer} from 'rxjs';
import {map, pluck, switchMap, take, takeUntil, timeInterval} from 'rxjs/operators';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.less']
})
export class Section4Component implements OnInit {

  technologies = [
    {name: 'JAVA', level: 'good'},
    {name: 'TypeScript', level: 'good'}, {
      name:
        'JavaScript', level: 'good'
    }, {
      name:
        'Ruby', level: 'medium'
    }, {
      name:
        'jQuery', level: 'medium'
    }, {
      name:
        'JSP', level: 'good'
    }, {
      name:
        'HTML', level: 'expert'
    }, {
      name:
        'CSS', level: 'expert'
    }, {
      name:
        'Python', level: 'expert'
    }, {
      name:
        'SQL', level: 'good'
    }, {
      name:
        'Spring', level: 'good'
    }, {
      name:
        'SpringBoot', level: 'good'
    }, {
      name:
        'Hybris', level: 'medium'
    }, {
      name:
        'AngularJS', level: 'beginner'
    }, {
      name:
        'Angular', level: 'expert'
    }, {
      name:
        'EmberJs', level: 'medium'
    }, {
      name:
        'ReactJs', level: 'beginner'
    }, {
      name:
        'VueJs', level: 'beginner'
    }, {
      name:
        'NativeScript', level: 'medium'
    }, {
      name:
        'Ionic', level: 'good'
    }, {
      name:
        'Node', level: 'good'
    }, {
      name:
        'PhantomJs', level: 'good'
    }, {
      name:
        'Webpack', level: 'good'
    }, {
      name:
        'Docker', level: 'expert'
    }, {
      name:
        'DockerCompose', level: 'expert'
    }, {
      name:
        'BitbucketPipelines', level: 'good'
    }, {
      name:
        'Nginx', level: 'good'
    }, {
      name:
        'Tomcat', level: 'beginner'
    }, {
      name:
        'Solr', level: 'medium'
    }, {
      name:
        'ElasticSearch', level: 'medium'
    }, {
      name:
        'Jenkins', level: 'good'
    }, {
      name:
        'ShellScript', level: 'good'
    }, {
      name:
        'Groovy', level: 'beginner'
    }, {
      name:
        'Maven', level: 'medium'
    }, {
      name:
        'Ant', level: 'medium'
    },
    {name: 'NPM', level: 'expert'}
  ];

  constructor(private renderer: Renderer2) {
  }

  @ViewChild('cards') cards: ElementRef;
  scroll;
  right = true;
  pause = false;

  ngOnInit() {
    timer(0, 10)
      .pipe().subscribe(() => {
      this.scrollBby();
    });
  }

  scrollBby() {
    if (!this.pause) {
      this.cards.nativeElement.scrollLeft = this.cards.nativeElement.scrollLeft + 1;
    }
  }

}
