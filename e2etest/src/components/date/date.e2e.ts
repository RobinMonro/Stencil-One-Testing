import { newE2EPage, E2EPage, E2EElement } from '@stencil/core/testing';
import { DateResolution } from '../../../../models/care-record-specs';

import moment, * as _moment from 'moment-timezone';
import { DateInput } from './date';
import { TestUtil } from '../../../../models/test-data-crs-generator';

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
      page = await newE2EPage({
        html: `
          <sw-date></sw-date>
        `
      });
      element = await page.find('sw-date');
    });


    it('should create the correct tag', async () => {
      expect(element.tagName).toBe('SW-DATE');
    });

    it('should work without parameters or data', async () => {
      // expect(element.textContent.trim()).toEqual('Today//'); // broken
    });

    describe('validation of inputs', () => {
      let day: E2EElement;
      let dayInput;
      let dayInput2;
      let dayInput3;
      let dayInput4;
      let month;
      let year;
      let validityChangeSpy;
      let updateDateSpy;
      let name;
      beforeEach(async () => {
        day = await page.find('sw-date >>> .day');
        dayInput = day.shadowRoot.querySelector('input')
        dayInput2 = await day.find('date-time-number >>> input');
        dayInput3 = await day.find('input');
        dayInput4 = await day.find('date-time-number >>> div');
        month = await page.find('sw-date >>> .month >>> input');
        year = await page.find('sw-date >>> .year >>> input');
        validityChangeSpy = await element.spyOnEvent('validityChange');
        updateDateSpy = await element.spyOnEvent('updateDate');
        name = await element.getProperty('name');
      });

      describe('day only', () => {
        it('a good number should be not enough', async () => {


        });
      });
    });
  });
});
