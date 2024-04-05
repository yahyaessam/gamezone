import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainterComponent } from './tabs-containter/tabs-containter.component';
import { TabComponent } from './tab/tab.component';



@NgModule({
  declarations: [
    ModalComponent,
    TabsContainterComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    TabsContainterComponent,
    TabComponent
  ]
})
export class SharedModule { }
