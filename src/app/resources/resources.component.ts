import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ResourceService } from '../services/resource.service';
function showAboutAsset() {
  const aboutAsset = document.getElementById('about-asset');
  const placeholder = document.getElementById('placeholder');
  aboutAsset.classList.add('active');
  placeholder.style.margin = '20%';
}

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
resId: any;
selectedResources: any[] = [];
singleRes: any;
showNoDisplayDiv = false;
  constructor(private route: ActivatedRoute, private resService: ResourceService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.route.paramMap
    .subscribe(params => {
      this.resId = parseInt(params.get('id'));
      this.getSelected(this.resId);
    })
  }

  getSelected(id: number){
    this.resService.getResourceById(id)
    .then(res => {
      this.spinner.hide();
      this.selectedResources.push(res);
      this.selectedResources.forEach(elem => {
        this.singleRes = elem;
      })
    })
    .catch(err => {
      // this.toast.error('Unable to connect to the database.', 'Rustlers');
    })
  }
}
