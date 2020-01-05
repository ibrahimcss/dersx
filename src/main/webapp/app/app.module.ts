import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { DersxSharedModule } from 'app/shared/shared.module';
import { DersxCoreModule } from 'app/core/core.module';
import { DersxAppRoutingModule } from './app-routing.module';
import { DersxHomeModule } from './home/home.module';
import { DersxEntityModule } from './entities/entity.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { JhMaterialModule } from 'app/shared/jh-material.module';
import { SidenavbarComponent } from './layouts/sidenavbar/sidenavbar.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    DersxSharedModule,
    DersxCoreModule,
    DersxHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    DersxEntityModule,
    DersxAppRoutingModule,
    JhMaterialModule
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    ErrorComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    FooterComponent,
    SidenavbarComponent
  ],
  bootstrap: [MainComponent]
})
export class DersxAppModule {}
