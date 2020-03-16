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

    describe(`interactions`, () => {
      it(`entering a number should make it not empty`, async () => {
        const input = await page.find('date-time-input >>> input');
        const updateValueSpy = await page.spyOnEvent('updateValue');
        expect(input).toBeTruthy();

        await input.press('1');
        await input.press('0');
        await page.waitForChanges();

        expect(updateValueSpy).toHaveReceivedEventDetail({
          id: 'day',
          value: '10'
        });
      });
    });
  });
});
