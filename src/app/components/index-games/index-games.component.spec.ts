import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexGamesComponent } from './index-games.component';

describe('IndexGamesComponent', () => {
  let component: IndexGamesComponent;
  let fixture: ComponentFixture<IndexGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
