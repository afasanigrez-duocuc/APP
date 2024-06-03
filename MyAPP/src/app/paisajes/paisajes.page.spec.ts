import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaisajesPage } from './paisajes.page';

describe('PaisajesPage', () => {
  let component: PaisajesPage;
  let fixture: ComponentFixture<PaisajesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
