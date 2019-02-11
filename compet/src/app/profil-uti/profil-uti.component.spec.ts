import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilUtiComponent } from './profil-uti.component';

describe('ProfilUtiComponent', () => {
  let component: ProfilUtiComponent;
  let fixture: ComponentFixture<ProfilUtiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilUtiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilUtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
