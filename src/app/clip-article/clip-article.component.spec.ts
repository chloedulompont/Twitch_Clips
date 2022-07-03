import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipArticleComponent } from './clip-article.component';

describe('ClipArticleComponent', () => {
  let component: ClipArticleComponent;
  let fixture: ComponentFixture<ClipArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClipArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClipArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
