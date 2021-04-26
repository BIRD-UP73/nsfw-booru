import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SitesService} from '../sites/sites.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.css']
})
export class PostSearchComponent {

  sites: string[];

  constructor(
    private formBuilder: FormBuilder,
    private siteService: SitesService,
    private router: Router) {
    this.getSites();
  }

  submissionForm: FormGroup = this.formBuilder.group({
    tags: '',
    site: this.siteService.getSites()[0]
  });

  public onSubmit(): void {
    const site = this.submissionForm.get('site').value;
    const tags = this.submissionForm.get('tags').value;

    const queryParams = {
      tags,
      site
    };

    this.router.navigate([`/post-view`], {queryParams});
  }

  public getSites(): void {
    this.siteService.getSites().then(res => {
      this.sites = res;
    });
  }

  public changeSite($event: Event): void {
    this.submissionForm.patchValue({
      site: $event
    });
  }
}
