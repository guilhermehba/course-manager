import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { Error404Component } from "../error404/error404.component";

import { ReplacePipe } from "../pipe/replace.pipe";
import { StarComponent } from "../star/star.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { CoursesInfoComponent } from "./courses-info/courses-info.component";
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CourseListComponent,
    CoursesInfoComponent,

    StarComponent,
    Error404Component,
    ReplacePipe,
  ],
  imports: [
   FormsModule,
   RouterModule,
   CommonModule
  ]
})
export class CourseModule {}
