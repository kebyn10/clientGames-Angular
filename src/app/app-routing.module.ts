import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { IndexGamesComponent } from './components/index-games/index-games.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
const routes: Routes = [
    {
        path:'',
       /* redirectTo:'/games',
        pathMatch:'full'*/
        component:IndexGamesComponent


    },{
        path:'games',
        component:GameListComponent
    },
    {
        path:'games/addGame',
        component:GameFormComponent
    },
    {
        path:'games/edit/:id',
        component:GameFormComponent
    },{
        path:'user/login',
        component:FormUserComponent
    },
    {
      path:'user/sigup',
      component:RegisterUserComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
