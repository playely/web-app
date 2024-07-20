import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDetailsComponent } from './content-details.component';
import { ContentServiceMock } from '../../tests/service-mocks/content-service.mock';
import { ContentService } from '../../services/content.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('ContentDetailsComponent', () => {
  let component: ContentDetailsComponent;
  let fixture: ComponentFixture<ContentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentDetailsComponent, HttpClientTestingModule],
      providers: [
        provideRouter([]),
        { provide: ContentService, useClass: ContentServiceMock }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
