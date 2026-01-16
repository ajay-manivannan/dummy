import { Routes } from '@angular/router';
import { DummyPage } from './pages/dummy-page/dummy-page';

export const routes: Routes = [
    {
        path: '',
        component: DummyPage,
        title: 'Dummy Page',
    }
];
