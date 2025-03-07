

📌 **Optional Chaining (?.) 이란?**
객체 프로퍼티가 `undefined` 또는 `null`일 경우, 에러 없이 안전하게 접근할 수 있도록 도와주는 연산자다.
즉, 중첩된 객체에서 존재하지 않는 속성을 접근하려고 할 때, `TypeError`가 발생하지 않고 `undefined`를 반환한다.


-  함수 호출에서 사용


```bash
const obj = {
  sayHello: () => "안녕!"
};

console.log(obj.sayHello?.()); // "안녕!"
console.log(obj.sayGoodbye?.()); // undefined (에러 발생 X)
```

- 배열 요소 접근

```bash
const users = [{ name: "뚱이" }, { name: "징징이" }];

console.log(users[1]?.name); // "징징이"
console.log(users[5]?.name); // undefined (에러 발생 X)
```


### 📌 **정리**

- `?.` 연산자는 **객체, 배열, 함수 호출 시 안전하게 접근**할 수 있도록 도와줌
- `null` 또는 `undefined`가 나오면 즉시 `undefined`를 반환하고, 이후의 체이닝을 실행하지 않음
- 예외를 방지하면서 코드를 간결하게 유지할 수 있음

🚀 **TIP:** `?.`은 **읽기 전용**으로만 사용 가능하며, 할당 연산에는 사용할 수 없다.

