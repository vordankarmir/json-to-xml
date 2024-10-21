import OBJtoXML from "../src/index";

describe("OBJtoXML function", () => {
  it("should convert a simple object to XML format", () => {
    const obj = { name: "John", age: 30 };
    const result = OBJtoXML(obj);
    expect(result).toBe("<name>John</name><age>30</age>");
  });

  it("should handle nested objects", () => {
    const obj = { person: { name: "John", age: 30 } };
    const result = OBJtoXML(obj);
    expect(result).toBe("<person><name>John</name><age>30</age></person>");
  });

  it("should handle arrays within objects", () => {
    const obj = { people: [{ name: "John" }, { name: "Jane" }] };
    const result = OBJtoXML(obj);
    expect(result).toBe(
      "<people><name>John</name></people><people><name>Jane</name></people>"
    );
  });

  it("should ignore numeric properties", () => {
    const obj = { 1: "value", name: "John" };
    const result = OBJtoXML(obj);
    console.log(result);
    expect(result).toBe("<name>John</name>");
  });

  it("should handle empty objects", () => {
    const obj = {};
    const result = OBJtoXML(obj);
    expect(result).toBe("");
  });
});
