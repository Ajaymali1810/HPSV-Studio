import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { ContactComponent } from './contact/contact.component'; 
import { WorksComponent } from './works/works.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from './error404/error404.component';
import { DescriptionSectionComponent } from './description-section/description-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ArchitectureComponent,
    ContactComponent,
    WorksComponent,
    FooterComponent,
    NavbarComponent,
    Error404Component,
    DescriptionSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
