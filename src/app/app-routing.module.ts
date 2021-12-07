import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main/main.component";
import { ProfileComponent } from "./suggested-friends/profile/profile.component";
import { SuggestedFriendsComponent } from "./suggested-friends/suggested-friends.component";

const routes: Routes = [
  {path: "" , component: HomeComponent},
  {path: 'home' , component: HomeComponent},
  {path:'suggestedfriends' , component: SuggestedFriendsComponent},
  {path: 'profile' , component: ProfileComponent},
  {path: 'main' , component: MainComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [RouterModule]
})

export class AppRoutingModule{

}