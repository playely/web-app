import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPersonalComponent } from './content-personal.component';
import { ContentServiceMock } from '../../tests/service-mocks/content-service.mock';
import { ContentService } from '../../services/content.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContentPersonalComponent', () => {
  let component: ContentPersonalComponent;
  let fixture: ComponentFixture<ContentPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentPersonalComponent, HttpClientTestingModule],
      providers: [
        { provide: ContentService, useClass: ContentServiceMock }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
