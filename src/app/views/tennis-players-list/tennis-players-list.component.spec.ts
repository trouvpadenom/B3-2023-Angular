import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisPlayersListComponent } from './tennis-players-list.component';

describe('TennisPlayersListComponent', () => {
  let component: TennisPlayersListComponent;
  let fixture: ComponentFixture<TennisPlayersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TennisPlayersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TennisPlayersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
