import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Ensure you are impoting BrowserAnimationsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatMenuModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SuggestedFriendsComponent } from './suggested-friends/suggested-friends.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './suggested-friends/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { DropdownDirective } from './navbar/dropdown.directive';
import { MainComponent } from './main/main.component';


@NgModule({
  // Ensure to export the module to use this wherever required
  imports: [
    BrowserModule, 
    FormsModule, 
    BrowserModule, 
    BrowserAnimationsModule, 
    MatToolbarModule, 
    MatMenuModule, 
    MatIconModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule,
    AppRoutingModule],

  declarations: [
    AppComponent, 
    HelloComponent , 
    SuggestedFriendsComponent, 
    NavbarComponent, 
    HomeComponent, 
    ProfileComponent,
    DropdownDirective,
    MainComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
