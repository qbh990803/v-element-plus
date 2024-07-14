import { expect, test, describe, vi, type Mocked } from "vitest";
import axios from "axios";
import {testFn, request} from './utils'

vi.mock("axios");

const mockAxios = axios as Mocked<typeof axios>;

test("test common matcher", () => {
  const name = "viking";
  expect(name).toBe("viking");
  expect(2 + 2).toBe(4);
  expect(2 + 2).not.toBe(5);
});

test("test to be true or false", () => {
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
});

test("test number", () => {
  expect(4).toBeGreaterThan(3);
  expect(2).toBeLessThan(3);
});

test("test object", () => {
  expect({ name: "viking" }).toEqual({ name: "viking" });
});

describe("test functions", () => {
  test('create a mock function', () => {
    const callback = vi.fn()
    testFn(12, callback)

    expect(callback).toHaveBeenCalled()
    expect(callback).toHaveBeenCalledWith(12)
  })
  test('spy on method', () => {
    const obj = {
      getName: () => 'jack'
    }
    const spy = vi.spyOn(obj, 'getName')
    obj.getName()
    expect(spy).toBeCalled()
    obj.getName()
    expect(spy).toBeCalledTimes(2)
  })
  test('mock third party module', async () => {
    mockAxios.get.mockResolvedValue({data: 123})
    const result = await request()

    expect(result).toBe(123)
  })
});
