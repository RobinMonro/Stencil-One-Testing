import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing';
import { UpdatedValue } from '../date-resources';
import { DateInput } from 'date';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('date', () => {
  it ('should build', () => {
    expect(new DateInput()).toBeTruthy();
  });

  describe('rendering', () => {
    let page: E2EPage;
    let element: E2EElement;
    beforeEach(async () => {
      page = await newE2EPage({ html: `<sw-date></sw-date>` });
      element = await page.find('sw-date');
    });


    it('should create the correct tag', async () => {
      expect(element.tagName).toBe('SW-DATE');
    });

    it('should work without parameters or data', async () => {
      expect(element.textContent.trim()).toEqual('//');
    });

    describe('validation of inputs', () => {
      let day: E2EElement;
      let dayInput;
      let month;
      let monthInput;
      let year;
      let yearInput;
      let validityChangeSpy;
      let updateDateSpy;
      let name;
      beforeEach(async () => {
        day = await page.find('test-date >>> .day');
        dayInput = await page.find('date-time-input >>> input')
        month = await page.find('sw-date >>> .month');
        monthInput = await page.find('date-time-input >>> input')
        year = await page.find('sw-date >>> .year');
        yearInput = await page.find('date-time-input >>> input')
        updateDateSpy = await element.spyOnEvent('updateDate');
        name = await element.getProperty('name');
      });

      describe('day only', () => {
        it('should respond to inputs', async () => {
        let value = await element.getProperty('value');
        expect(value).toBe('0');
        await page.waitForChanges();

        await dayInput.press('2'); // Oh no! It breaks here because it can't find dayInput
        await dayInput.press('3');
        await page.waitForChanges();

        expect(updateValueSpy).toHaveReceivedEventDetail({
          id: name,
          value: '23'
        });
      });
    });
  });
});
