import { Component, Event, EventEmitter, h, JSX, Listen, Prop, State } from '@stencil/core';
import { UpdatedValue } from '../date-resources';

enum Parts {
  Year = 'year',
  Month = 'month',
  Day = 'day'
}

@Component({
  tag: 'test-date',
  shadow: true
})
export class DateInput {
  @Prop({ mutable: true, reflectToAttr: true }) public value?: string;
  @Prop() public name: string = 'date';

  @State() private year?: string;
  @State() private month?: string;
  @State() private day?: string;
  @State() protected _value?: string = this.format();

  @Event() public updateDate: EventEmitter<UpdatedValue>;

  // ** Event Handlers */
  @Listen('updateValue')
  protected updateValue(e: CustomEvent<UpdatedValue>): void {
    console.log('received updatevalue', e.detail.value, e.detail.id);
    const newVal = e.detail.value;
    switch (e.detail.id) {
      case Parts.Year:
        console.log('year updated with', newVal);
        this.year = newVal;
        break;
      case Parts.Month:
        console.log('month updated with', newVal);
        this.month = newVal;
        break;
      case Parts.Day:
        console.log('day updated with', newVal);
        this.day = newVal;
        break;
      default:
        break;
    }
    this.construct();
  }

  protected joinDate(year?: string, month?: string, day?: string): string {
    if (!!day) {
      return `${year}-${month}-${day}`;
    } else if (!!month) {
      return `${year}-${month}`;
    } else if (!!year) {
      return year;
    }
    return '';
  }

  protected format(replacement?: UpdatedValue): string {
    let value = '';
    if (!!replacement) {
      switch (replacement.id) {
        case Parts.Year:
          value = this.joinDate(replacement.value, this.month, this.day);
          break;
        case Parts.Month:
          value = this.joinDate(this.year, replacement.value, this.day);
          break;
        case Parts.Day:
          value = this.joinDate(this.day, this.month, replacement.value);
          break;
      }
      value = this.joinDate(this.year, this.month, this.day);
    }
    return value;
  }

  private get input(): string | undefined {
    return `${this.year}-${this.month}-${this.day}`;
  }

  protected construct(): void {
    if (!!this.input) {
      const value = new UpdatedValue(this.name, this.input);
      this._value = this.input;
      console.log('emitting date', value);
      this.updateDate.emit(value);
    }
  }

  // ** Renderers */
  protected separator(): JSX.Element {
    return <span class='seperator'>/</span>;
  }

  protected render(): JSX.Element {
    const day = (
      <date-time-input
        name='day'
        class='day'
        max={31}
        min={0}
      />
    );

    const month = (
      <date-time-input
        class='month'
        name='month'
        max={12}
        min={0}
      />
    );

    const year: JSX.Element = (
      <date-time-input
        class='year'
        name='year'
        min={1900}
      />
    );


    return (
      <div class='date-input'>
        <span class='date'>
          {day}
          {this.separator()}
          {month}
          {this.separator()}
          {year}
        </span>
      </div>
    );
  }
}
