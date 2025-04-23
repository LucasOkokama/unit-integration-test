import { expect, test } from "vitest";
import { getFutureDate } from "./get-future-date";


test("Should increse date with one year", () => {
  const year = new Date()
  expect(getFutureDate(`${year.getFullYear()}-08-10`).getFullYear()).toEqual(year.getFullYear() + 1)
})