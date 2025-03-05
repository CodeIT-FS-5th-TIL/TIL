- Props Drilling 없이 **전역 상태**를 공유할 수 있는 방법.
- `createContext()`와 `useContext()`를 사용하여 구현.

## 사용법


1.  Context 생성


```bash
const MyContext = createContext(defaultValue);
```

- `createContext()`를 사용하여 Context를 만든다.
- 기본값을 설정할 수 있다.
1. Provider로 값 공급

```bash
<MyContext.Provider value={sharedValue}>
  {children}
</MyContext.Provider>
```


`Provider`를 통해 자식 컴포넌트에 값을 전달한다.


1. useContext로 값 사용

```bash
const value = useContext(MyContext);
```


## 사용 예시


```bash
const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("Hello");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

const MyComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue("Hi!")}>Change Value</button>
    </div>
  );
};

//MyProvider에서 상태를 관리하고, MyComponent에서 useContext로 값을 가져와 사용한다.
//버튼을 클릭하면 Context 값을 업데이트할 수 있다.
```


### 언제 사용하나?


✅ **전역 상태 관리** → 테마, 사용자 인증 상태 등 여러 컴포넌트가 공유해야 할 때.


✅ **깊은 트리에서의 데이터 전달** → props를 여러 단계 전달하는 대신 Context로 해결.


### 주의할 점


⚠️ **불필요한 리렌더링** → 너무 많은 데이터를 Context에 넣으면 성능 저하 가능.


⚠️ **상태 관리 라이브러리와 비교** → Redux, Recoil, Zustand 등이 더 적합한 경우도 있음.

