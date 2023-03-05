import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor,  NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true,
    },
  ],
})
export class RatingComponent implements OnInit, ControlValueAccessor {
  value = 2;
  hoveredRating: number | null = 2;
  isMouseOver = false;
  @Input() disabled = false;

  constructor() {}

  ngOnInit(): void {}

  onChange: any = () => {};
  onTouched: any = () => {};

  onRatingMouseEnter(rating: number) {
    if (this.disabled) return;
    this.hoveredRating = rating;
    this.isMouseOver = true;
  }

  onRatingMouseLeave() {
    this.hoveredRating = null;
    this.isMouseOver = false;
  }

  selectRating(rating: number) {
    if (this.disabled) return;
    this.value = rating;
    this.onChange(rating); //set the form control value to the value on the selected rating
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  writeValue(value: number) {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
