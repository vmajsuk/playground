function decorate() {
  return function(
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const fn = descriptor.value;
    return {
      ...descriptor,
      value: (...args) => {
        const r = fn(...args);
        console.log(r);
        return r;
      }
    };
  };
}

class Test {
  @decorate()
  add(a, b) {
    return a + b;
  }
}

const test = new Test();
test.add(1, 3);
