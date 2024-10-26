import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoliceSeguroComponent } from './apolice-seguro.component';

describe('ApoliceSeguroComponent', () => {
  let component: ApoliceSeguroComponent;
  let fixture: ComponentFixture<ApoliceSeguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApoliceSeguroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApoliceSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
