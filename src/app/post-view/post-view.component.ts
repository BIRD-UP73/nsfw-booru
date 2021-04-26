import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post, PostService} from '../post_api/post.service';
import {SitesService} from '../sites/sites.service';
import {SiteOptions} from '../sites/site_options';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  tags: string;
  site: string;
  post: Post;
  page = 0;

  constructor(private route: ActivatedRoute,
              private siteService: SitesService,
              private postService: PostService) {
  }

  async ngOnInit(): Promise<void> {
    await this.route.queryParams.subscribe(params => {
      this.tags = params.tags;
      this.site = params.site;
    });

    this.getPost();
  }

  getPost(): void {
    this.postService.getPost(this.site, this.tags, this.page).then(res => {
      this.post = res;
      this.post.fileUrl = `http://localhost:8080/file/${this.site}/${this.post.id}`;
    });
  }

  nextPage(): void {
    this.page = this.page + 1 % this.post.count;
    this.getPost();
  }

  previousPage(): void {
    this.page = this.page - 1 % this.post.count;
    this.getPost();
  }

  randomPage(): void {
    this.page = Math.floor(Math.random() * this.post.count);
    this.getPost();
  }

  postIsImage(): boolean {
    return !this.post.video;
  }
}
