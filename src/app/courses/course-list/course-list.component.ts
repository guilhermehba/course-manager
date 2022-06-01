import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  constructor() {}

  ngOnInit(): void {
    this.courses = [
      {
        id:1,
        name:'Angular: Forms',
        imageUrl:'../../../assets/images/forms.png',
        price: 49.99,
        code: 'ANG-3200',
        duration: 120,
        rating: 4.5,
        releaseDate:'Janyary, 2, 2022'

      },
      {
        id:2,
        name:'Angular: HTTP',
        imageUrl:'../../../assets/images/http.png',
        price: 49.99,
        code: 'ANG-3200',
        duration: 120,
        rating: 4.5,
        releaseDate:'Janyary, 2, 2022'

      }
    ]
  }
}
