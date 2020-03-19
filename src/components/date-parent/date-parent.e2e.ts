import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing';
import { DateParent } from './date-parent';

describe('date', () => {
  it('should build', () => {
    expect(new DateParent()).toBeTruthy();
  });

  describe('rendering', () => {
    let page: E2EPage;
    let element: E2EElement;
    beforeEach(async () => {
      page = await newE2EPage({ html: `<date-parent></date-parent>` });
      element = await page.find('date-parent');
    });

    it('should create the correct tag', async () => {
      expect(element.tagName).toBe('DATE-PARENT');
    });

    describe('validation of inputs', () => {
      let day: E2EElement;
      let dayInput: E2EElement;

      describe('day only', () => {
        it('should respond to inputs', async () => {
          day = await page.find('date-parent >>> date-number.day'); // This line works just fine
          const E: any = day.constructor;
          dayInput = await page
            .evaluateHandle(
              (elm, shadowSelector) => {
                return elm.shadowRoot.querySelector(shadowSelector);
              },
              day['_elmHandle'], // internal puppeteer reference for the element
              'input' // shadow selector
            )
            .then(handle => new E(page, handle.asElement()));

          expect(day).toBeTruthy();
          expect(dayInput).toBeTruthy();
          expect(day.constructor.name).toBe('E2EElement');
          expect(dayInput.constructor.name).toBe('E2EElement');
        });
      });
    });
  });
});
