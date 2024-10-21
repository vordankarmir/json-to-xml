# json-to-xml

json-to-xml is a library to parse json like object to xml.

# Usage

```
const OBJtoXML = require('json-to-xml');

const obj = {
  rootTag: {
    intProperty: 4,
    stringProperty: 'foo',
    listOfElements: {
      element: [{
        intProperty: 5,
        stringProperty: 'bar',
      }, {
        intProperty: 5,
        stringProperty: 'bar',
      }],
    },
    list: {
      listElement: [1, 2, 3],
    },
  },
};

const xml = OBJtoXML(obj);

/* Output
<rootTag>
  <intProperty>4</intProperty>
  <stringProperty>foo</stringProperty>
  <listOfElements>
    <element>
      <intProperty>5</intProperty>
      <stringProperty>bar</stringProperty>
    </element>
    <element>
      <intProperty>5</intProperty>
      <stringProperty>bar</stringProperty>
    </element>
  </listOfElements>
  <list>
    <listElement>1</listElement>
    <listElement>2</listElement>
    <listElement>3</listElement>
  </list>
</rootTag>
*/
```
