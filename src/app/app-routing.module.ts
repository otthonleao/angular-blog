import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { ContatosComponent } from './pages/contatos/contatos.component';

const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch:'full' },
	{ path: 'content/:id', component: ContentComponent, pathMatch: 'prefix' },
	{ path: 'contatos', component: ContatosComponent, pathMatch: 'prefix'},
	{ path: '**', redirectTo: ''} // Rota "coringa": Se alguém utilizar uma rota que não existe, podemos enviar para uma página padrão, nesse caso está indo pra home.
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
