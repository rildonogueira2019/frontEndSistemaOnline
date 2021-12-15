import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessosListagemComponent } from './processos-listagem.component';

describe('ProcessosListagemComponent', () => {
  let component: ProcessosListagemComponent;
  let fixture: ComponentFixture<ProcessosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
