import {
  Component,
  Event,
  EventEmitter,
  h,
  JSX,
  Listen,
  Prop,
  State
} from "@stencil/core";

enum Parts {
  Year = "year",
  Month = "month",
  Day = "day"
}

@Component({
  tag: "date-parent",
  shadow: true
})
export class DateParent {
  @Prop({ mutable: true, reflectToAttr: true }) public value?: string;

  @State() private year?: string;
  @State() private month?: string;
  @State() private day?: string;

  @Event() public updateDate: EventEmitter<string>;

  // ** Event Handlers */
  @Listen("updateValue")
  protected handleChildUpdate(e: CustomEvent<string[]>): void {
    const [id, newVal] = e.detail;
    switch (id) {
      case Parts.Year:
        this.year = newVal;
        break;
      case Parts.Month:
        this.month = newVal;
        break;
      case Parts.Day:
        this.day = newVal;
        break;
      default:
        break;
    }
    this.value = this.joinDate(this.year, this.month, this.day);
    this.updateDate.emit(this.value);
  }

  protected joinDate(year?: string, month?: string, day?: string): string {
    if (!!day) {
      return `${year}-${month}-${day}`;
    } else if (!!month) {
      return `${year}-${month}`;
    } else if (!!year) {
      return year;
    }
    return "";
  }

  protected render(): JSX.Element {
    return (
      <div class="date-input">
        <span class="date">
          <date-number name="day" class="day" max={31} min={0} />/
          <date-number class="month" name="month" max={12} min={0} />/
          <date-number class="year" name="year" min={1900} />
        </span>
      </div>
    );
  }
}
