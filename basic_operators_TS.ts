type Basic<T> = keyof T;

const Obj = { name: "Name", age: 25 };

type ValueOf<T> = T[keyof T];

type A = (typeof Obj)[keyof typeof Obj];

type B = ValueOf<typeof Obj>;
