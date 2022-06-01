import { CourseService } from './../course.service';
import { Course } from './../course';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-info',
  templateUrl: './courses-info.component.html',
  styleUrls: ['./courses-info.component.css']
})
export class CoursesInfoComponent implements OnInit {

  course!:Course

  constructor(private activatedRoute:ActivatedRoute, private courseService:CourseService) { }

  ngOnInit(): void {
    this.course = this.courseService.retrieveById(+(this.activatedRoute.snapshot.paramMap.get('id') as any)) ;
  }
  save():void{
    this.courseService.save(this.course)
  }

}
