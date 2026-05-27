import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/seo.service';
import { LangService } from '../../core/lang.service';
import { TPipe } from '../../core/t.pipe';
import { TKey } from '../../core/i18n';

interface Post {
  id: string;
  titleKey: TKey;
  excerptKey: TKey;
  p1Key: TKey;
  p2Key: TKey;
  p3Key: TKey;
  image: string;
}

@Component({
  selector: 'app-blog',
  imports: [RouterLink, TPipe],
  templateUrl: './blog.html',
  styles: [`
    details > summary { list-style: none; }
    details > summary::-webkit-details-marker { display: none; }
  `],
})
export class BlogPage implements OnInit {
  private seo = inject(SeoService);
  protected readonly langSvc = inject(LangService);
  protected readonly lang = this.langSvc.lang;

  // 20 activity posts. Images cycle through available hotel/Black Forest imagery.
  protected readonly posts: Post[] = [
    { id: 'a01', titleKey: 'blog.a01Title', excerptKey: 'blog.a01Excerpt', p1Key: 'blog.a01P1', p2Key: 'blog.a01P2', p3Key: 'blog.a01P3', image: 'images/hbf-foto-08.jpg' },
    { id: 'a02', titleKey: 'blog.a02Title', excerptKey: 'blog.a02Excerpt', p1Key: 'blog.a02P1', p2Key: 'blog.a02P2', p3Key: 'blog.a02P3', image: 'images/14A7391-1240x827.jpg' },
    { id: 'a03', titleKey: 'blog.a03Title', excerptKey: 'blog.a03Excerpt', p1Key: 'blog.a03P1', p2Key: 'blog.a03P2', p3Key: 'blog.a03P3', image: 'images/hotel-hbf-slider03-1240x826.jpg' },
    { id: 'a04', titleKey: 'blog.a04Title', excerptKey: 'blog.a04Excerpt', p1Key: 'blog.a04P1', p2Key: 'blog.a04P2', p3Key: 'blog.a04P3', image: 'images/14A7533-1240x827.jpg' },
    { id: 'a05', titleKey: 'blog.a05Title', excerptKey: 'blog.a05Excerpt', p1Key: 'blog.a05P1', p2Key: 'blog.a05P2', p3Key: 'blog.a05P3', image: 'images/14A7345-1240x827.jpg' },
    { id: 'a06', titleKey: 'blog.a06Title', excerptKey: 'blog.a06Excerpt', p1Key: 'blog.a06P1', p2Key: 'blog.a06P2', p3Key: 'blog.a06P3', image: 'images/Fruhstuck.jpg' },
    { id: 'a07', titleKey: 'blog.a07Title', excerptKey: 'blog.a07Excerpt', p1Key: 'blog.a07P1', p2Key: 'blog.a07P2', p3Key: 'blog.a07P3', image: 'images/hbf-foto-22-394x394.jpg' },
    { id: 'a08', titleKey: 'blog.a08Title', excerptKey: 'blog.a08Excerpt', p1Key: 'blog.a08P1', p2Key: 'blog.a08P2', p3Key: 'blog.a08P3', image: 'images/hotel-hbf-slider01-1240x826.jpg' },
    { id: 'a09', titleKey: 'blog.a09Title', excerptKey: 'blog.a09Excerpt', p1Key: 'blog.a09P1', p2Key: 'blog.a09P2', p3Key: 'blog.a09P3', image: 'images/14A7346-1240x827.jpg' },
    { id: 'a10', titleKey: 'blog.a10Title', excerptKey: 'blog.a10Excerpt', p1Key: 'blog.a10P1', p2Key: 'blog.a10P2', p3Key: 'blog.a10P3', image: 'images/hotel-hbf-slider02-1240x826.jpg' },
    { id: 'a11', titleKey: 'blog.a11Title', excerptKey: 'blog.a11Excerpt', p1Key: 'blog.a11P1', p2Key: 'blog.a11P2', p3Key: 'blog.a11P3', image: 'images/image-01-1240x827.jpg' },
    { id: 'a12', titleKey: 'blog.a12Title', excerptKey: 'blog.a12Excerpt', p1Key: 'blog.a12P1', p2Key: 'blog.a12P2', p3Key: 'blog.a12P3', image: 'images/hbf-foto-14-394x394.jpg' },
    { id: 'a13', titleKey: 'blog.a13Title', excerptKey: 'blog.a13Excerpt', p1Key: 'blog.a13P1', p2Key: 'blog.a13P2', p3Key: 'blog.a13P3', image: 'images/hbf-foto-16.jpg' },
    { id: 'a14', titleKey: 'blog.a14Title', excerptKey: 'blog.a14Excerpt', p1Key: 'blog.a14P1', p2Key: 'blog.a14P2', p3Key: 'blog.a14P3', image: 'images/hbf-foto-19-394x394.jpg' },
    { id: 'a15', titleKey: 'blog.a15Title', excerptKey: 'blog.a15Excerpt', p1Key: 'blog.a15P1', p2Key: 'blog.a15P2', p3Key: 'blog.a15P3', image: 'images/Radausfluge.jpg' },
    { id: 'a16', titleKey: 'blog.a16Title', excerptKey: 'blog.a16Excerpt', p1Key: 'blog.a16P1', p2Key: 'blog.a16P2', p3Key: 'blog.a16P3', image: 'images/14A7481-1-1240x827.jpg' },
    { id: 'a17', titleKey: 'blog.a17Title', excerptKey: 'blog.a17Excerpt', p1Key: 'blog.a17P1', p2Key: 'blog.a17P2', p3Key: 'blog.a17P3', image: 'images/image-02-1240x826.jpg' },
    { id: 'a18', titleKey: 'blog.a18Title', excerptKey: 'blog.a18Excerpt', p1Key: 'blog.a18P1', p2Key: 'blog.a18P2', p3Key: 'blog.a18P3', image: 'images/IMG_6261-scaled-1-1240x827.jpg' },
    { id: 'a19', titleKey: 'blog.a19Title', excerptKey: 'blog.a19Excerpt', p1Key: 'blog.a19P1', p2Key: 'blog.a19P2', p3Key: 'blog.a19P3', image: 'images/IMG_62542-scaled-1-1240x827.jpg' },
    { id: 'a20', titleKey: 'blog.a20Title', excerptKey: 'blog.a20Excerpt', p1Key: 'blog.a20P1', p2Key: 'blog.a20P2', p3Key: 'blog.a20P3', image: 'images/hbf-foto-21-394x394.jpg' },
  ];

  link(path: string): unknown[] {
    return path ? ['/', this.lang(), path] : ['/', this.lang()];
  }

  ngOnInit() {
    this.seo.set({
      title: this.langSvc.t('blog.heroTitle1') + ' ' + this.langSvc.t('blog.heroTitle2'),
      description: this.langSvc.t('blog.intro'),
      path: '/blog',
    });
  }
}
