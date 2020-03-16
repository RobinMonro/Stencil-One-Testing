import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing';
import { DateInput } from './date';

describe('date', () => {
  it ('should build', () => {
    expect(new DateInput()).toBeTruthy();
  });

  describe('rendering', () => {
    let page: E2EPage;
    let element: E2EElement;
    beforeEach(async () => {
      page = await newE2EPage({ html: `<test-date></test-date>` });
      element = await page.find('test-date');
    });

    it('should create the correct tag', async () => {
      expect(element.tagName).toBe('TEST-DATE');
    });

    describe('validation of inputs', () => {
      let day: E2EElement;
      let dayInput: E2EElement;

      describe('day only', () => {
        it('should respond to inputs', async () => {
          day = await page.find('test-date >>> .day'); // This line works just fine
          dayInput = await page.find('date-time-input >>> input') // This line is the issue

          expect(day).toBeTruthy();
          expect(dayInput).toBeTruthy(); // Can't find anything so dayInput is undefined, and this fails
        });
      }); 
    });
  });
});
