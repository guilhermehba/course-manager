import { ReplacePipe } from './replace/replace.pipe';
import { NgModule } from "@angular/core";

@NgModule({
  declarations:[
    ReplacePipe
  ],
  exports:[
    ReplacePipe
  ]
})

export class AppPipeModule{

}
