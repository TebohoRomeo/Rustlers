import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Resource } from '../interfaces/resource';
import { ResourceService } from '../services/resource.service';

@Component({
  selector: 'app-resource-main',
  templateUrl: './resource-main.component.html',
  styleUrls: ['./resource-main.component.css']
})
export class ResourceMainComponent implements OnInit {
resources: any[] = [];
  constructor(private resService: ResourceService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getResources();
  }

  getResources() {
    return this.resService.getResources()
    .then(res => {
      this.spinner.hide();
      res.data?.forEach((elem) => {
        this.resources.push(elem);
        
      })
    }).catch(err => {
      console.log(err);
    })
  }

  
}
