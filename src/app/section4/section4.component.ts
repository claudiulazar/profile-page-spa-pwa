import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.less']
})
export class Section4Component implements OnInit {

  technologies = [
    'JAVA',
    'TypeScript',
    'JavaScript',
    'Ruby',
    'C/C++',
    'C#',
    'jQuery',
    'JSP',
    'HTML',
    'CSS',
    'Python (just played a little with it)',
    'Scala (just played a little with it)',
    'SQL',
    'MySQL',
    'MsSQL',
    'PostgreSQL',
    'Spring',
    'Spring Boot',
    'Hybris',
    'AngularJS (not a big fan)',
    'Angular 2.x-7.x',
    'Ember.js',
    'ReactJS (just played a little with it)',
    'Vue.js (just played a little with it)',
    'NativeScript',
    'Ionic Framework',
    'Node.js',
    'PhantomJS',
    'Capybara',
    'Webpack',
    'Docker',
    'Docker-compose',
    'Bitbucket pipelines',
    'Nginx',
    'Tomcat',
    'Solr',
    'ElasticSearch',
    'Jenkins',
    'ShellScript',
    'Bash/Batch',
    'Groovy',
    'Maven',
    'Ant',
    'NPM'
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
