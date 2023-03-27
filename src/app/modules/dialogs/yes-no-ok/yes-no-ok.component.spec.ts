import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoOkComponent } from './yes-no-ok.component';

describe('YesNoOkComponent', () => {
  let component: YesNoOkComponent;
  let fixture: ComponentFixture<YesNoOkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YesNoOkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNoOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
