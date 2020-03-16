import { Component, Event, EventEmitter, h, JSX, Prop, State } from '@stencil/core';
import { UpdatedValue } from '../date-resources';


@Component({
  tag: 'date-time-input',
  shadow: true,
  styleUrls: ['date-time-input.css']
})
export class DateTimeInput {
  @Prop({ mutable: true, reflect: true }) public value?: string;
  @Prop() public name: string;
  @Prop() public max?: number;
  @Prop() public min?: number;

  @State() private _value: string = '';

  @Event() public updateValue: EventEmitter<UpdatedValue>;

  private onChange(event: Event): void {
    console.log('onchange happened!');
    const value = (event.target as HTMLInputElement).value;
    this._value = value;
    this.updateInputValue(parseInt(value));
  }
  
  private blur(event: any): void {
    console.log('blur was successful!');
    const value = (event.target as HTMLInputElement).value;
    this._value = value;
    this.updateInputValue(parseInt(value));
  }

  private onInput(event: Event): void {
    console.log('onInput happened!');
    const value = (event.target as HTMLInputElement).value;
    this._value = value;
    this.updateInputValue(parseInt(value));
  }

  private updateInputValue(newValue: number | undefined): void {
    let val = `${newValue}`;
    while (val.length < 2) {
      val = `0${val}`;
    }
    console.log('emitting updatevalue with', val, this.name);
    this.updateValue.emit(new UpdatedValue(this.name, val));
  }

  public render(): JSX.Element {
    return (
      <span class='input'>
        <input
          type='number'
          onChange={this.onChange.bind(this)}
          onInput={this.onInput.bind(this)}
          onBlur={this.blur.bind(this)}
          value={this._value}
          max={this.max}
          min={this.min}
        />
      </span>
    );
  }
}
