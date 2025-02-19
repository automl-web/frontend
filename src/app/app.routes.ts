import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: "datasets",
        loadChildren: () => import('../datasets/datasets.module').then(m => m.DatasetsModule)
    },
    {
        path: "optimizations",
        loadChildren: () => import('../optimizations/optimizations.module').then(m => m.OptimizationsModule)
    },
    {
        path: "results",
        loadChildren: () => import('../results/results.module').then(m => m.ResultsModule)
    },
];
