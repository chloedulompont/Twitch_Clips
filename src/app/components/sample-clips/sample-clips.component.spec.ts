import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleClipsComponent } from './sample-clips.component';

describe('SampleClipsComponent', () => {
  let component: SampleClipsComponent;
  let fixture: ComponentFixture<SampleClipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleClipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleClipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
