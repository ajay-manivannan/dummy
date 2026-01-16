import { Component, inject } from '@angular/core';
import { GetObjects } from '../../services/get-objects';
import { ObjectsModel } from '../../models/objects-model';

@Component({
  selector: 'app-dummy-page',
  standalone: true,
  imports: [],
  templateUrl: './dummy-page.html',
  styleUrl: './dummy-page.css',
})
export class DummyPage {
  objectService = inject(GetObjects);

  data: ObjectsModel[] = [];


  getObjectData() {
    // this.objectService.getAllObjects().subscribe({
    //   next: (data) => {
    //     this.data = data;
    //   },
    //   error: (error) => {
    //     console.error('Error fetching data:', error);
    //   }
    // });
  }
}
