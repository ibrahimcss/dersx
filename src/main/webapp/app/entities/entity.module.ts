import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloWorldComponent } from './test/hello-world/hello-world.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.DersxBlogModule)
      },
      {
        path: 'post',
        loadChildren: () => import('./post/post.module').then(m => m.DersxPostModule)
      },
      {
        path: 'tag',
        loadChildren: () => import('./tag/tag.module').then(m => m.DersxTagModule)
      },
      {
        path: 'test',
        component: HelloWorldComponent
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [HelloWorldComponent]
})
export class DersxEntityModule {}
