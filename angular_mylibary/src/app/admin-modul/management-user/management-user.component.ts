import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ManagementUserService } from './ManagementUserService';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-management-user',
  templateUrl: './management-user.component.html',
  styleUrls: ['./management-user.component.css']
})
export class ManagementUserComponent implements OnInit {

  constructor(private managementUserService:ManagementUserService,
    private toastr:ToastrService,
    private route:ActivatedRoute,
    private translateService: TranslateService) { }

  ngOnInit(): void {

  }
  
  selectLanguage = (localize: string) => {
    this.translateService.use(localize);
  }

}
