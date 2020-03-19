import { newE2EPage, E2EPage, E2EElement } from "@stencil/core/testing";
import { DateNumber } from "./date-number";

describe("date number", () => {
  it("should build", () => {
    expect(new DateNumber()).toBeTruthy();
  });

  describe("rendering", () => {
    let page: E2EPage;
    let element: E2EElement;
    let container: E2EElement;
    beforeEach(async () => {
      page = await newE2EPage({
        html: `
          <date-number name='day'></date-number>
        `
      });
      element = await page.find("date-number");
      container = await page.find("date-number >>> .input");
    });

    it("should create the correct tag", async () => {
      expect(element.tagName).toBe("DATE-NUMBER");
    });

    describe(`interactions`, () => {
      it(`entering a number should make it not empty`, async () => {
        const input = await page.find("date-number >>> input");
        const updateValueSpy = await page.spyOnEvent("updateValue");
        expect(input).toBeTruthy();

        await input.press("1");
        await input.press("0");
        await page.waitForChanges();

        expect(updateValueSpy).toHaveReceivedEventDetail(["day", "10"]);
      });
    });
  });
});
