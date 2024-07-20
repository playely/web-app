import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentListComponent } from './content-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContentServiceMock } from '../../tests/service-mocks/content-service.mock';
import { ContentService } from '../../services/content.service';
import { provideRouter } from '@angular/router';

describe('ContentListComponent', () => {
  let component: ContentListComponent;
  let fixture: ComponentFixture<ContentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentListComponent, HttpClientTestingModule],
      providers: [
        provideRouter([]),
        { provide: ContentService, useClass: ContentServiceMock }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
