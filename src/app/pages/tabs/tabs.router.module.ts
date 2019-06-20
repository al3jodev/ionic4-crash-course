import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'peliculas',
        children: [
          {
            path: '',
            loadChildren: '../peliculas/peliculas.module#PeliculasPageModule'
          },
          {
            path: ':id',
            loadChildren: '../detalle-peliculas/detalle-peliculas.module#DetallePeliculasPageModule'
          }
        ]
      },
      {
        path: 'personas',
        children: [
          {
            path: '',
            loadChildren: '../personas/personas.module#PersonasPageModule'
          }
        ]
      },
      {
        path: 'planetas',
        children: [
          {
            path: '',
            loadChildren: '../planetas/planetas.module#PlanetasPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/peliculas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
