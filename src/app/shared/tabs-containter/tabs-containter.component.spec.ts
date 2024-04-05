import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsContainterComponent } from './tabs-containter.component';

describe('TabsContainterComponent', () => {
  let component: TabsContainterComponent;
  let fixture: ComponentFixture<TabsContainterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsContainterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsContainterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
