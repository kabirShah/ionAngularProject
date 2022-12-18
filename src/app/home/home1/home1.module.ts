import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Home1Page } from './home1.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { Home1PageRoutingModule } from './home1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Home1PageRoutingModule
  ],
  declarations: [Home1Page]
})
export class Home1PageModule {}
