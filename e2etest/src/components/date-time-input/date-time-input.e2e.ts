import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing';
import { DateTimeInput } from './date-time-input';

describe('date time number', () => {
  it('should build', () => {
    expect(new DateTimeInput()).toBeTruthy();
  });

  describe('rendering', () => {
    let page: E2EPage;
    let element: E2EElement;
    let container: E2EElement;
    beforeEach(async () => {
      page = await newE2EPage({
        html: `
          <date-time-input name='day'></date-time-input>
        `
      });
      element = await page.find('date-time-input');
      container = await page.find('date-time-input >>> .input');
    });

    it('should create the correct tag', async () => {
      expect(element.tagName).toBe('DATE-TIME-INPUT');
    });

    it('should work without parameters or data', async () => {
      expect(element.textContent.trim()).toEqual('');
    });

    describe(`interactions`, () => {
      let input;
      let updateValueSpy;
      let name;
      beforeEach(async () => {
        await element.setProperty('value', '0');
        await page.waitForChanges();
        input = await page.find('date-time-input >>> input');
        updateValueSpy = await element.spyOnEvent('updateValue');
        name = await element.getProperty('name');
      });

      it(`entering a number should make it not empty`, async () => {
        let value = await element.getProperty('value');
        expect(value).toBe('0');
        await page.waitForChanges();

        await input.press('1');
        await input.press('0');
        await page.waitForChanges();

        expect(updateValueSpy).toHaveReceivedEventDetail({
          id: name,
          value: '10'
        });
      });
    });
  });
});
