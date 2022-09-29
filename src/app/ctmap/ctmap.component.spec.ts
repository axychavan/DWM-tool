import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtmapComponent } from './ctmap.component';

describe('CtmapComponent', () => {
  let component: CtmapComponent;
  let fixture: ComponentFixture<CtmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
