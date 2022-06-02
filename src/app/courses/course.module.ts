import { StarModule } from './../shared/component/star/star.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { Error404Component } from "../shared/component/error404/error404.component";

import { ReplacePipe } from "../shared/pipe/replace/replace.pipe";
import { StarComponent } from "../shared/component/star/star.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { CoursesInfoComponent } from "./courses-info/courses-info.component";
import { CommonModule } from '@angular/common';
import { Error404Module } from '../shared/component/error404/erro404.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';


@NgModule({
  declarations: [
    CourseListComponent,
    CoursesInfoComponent,
  ],
  imports: [
   FormsModule,
   RouterModule,
   CommonModule,
   StarModule,
   Error404Module,
   AppPipeModule,

  ]
})
export class CourseModule {}
