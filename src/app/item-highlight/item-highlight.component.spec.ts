import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemHighlightComponent } from './item-highlight.component';

describe('ItemHighlightComponent', () => {
  let component: ItemHighlightComponent;
  let fixture: ComponentFixture<ItemHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemHighlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
