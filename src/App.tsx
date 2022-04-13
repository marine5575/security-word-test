import { FormEvent, useEffect, ChangeEvent, useRef, useState } from "react";

const getRandomWord = (): string => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let secret = "";

  [...Array(6)].forEach(() => {
    const rand = Math.floor(Math.random() * 26);
    secret += letters[rand];
  });

  return secret;
};

const getBackground = () => {
  const hex = "0123456789ABCDEF".split("");
  const bg = ["5", "8"];

  [...Array(4).keys()].forEach((idx: number) => {
    const rand = Math.floor(Math.random() * 16);

    if (idx < 2) bg.unshift(hex[rand]);
    else bg.push(hex[rand]);
  });

  return `#${bg.join("")}`;
};

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [secret, setSecret] = useState<string>("");
  const [bgColor, setBgColor] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.toUpperCase();

    setInputValue(input.replace(/[^A-Z]/gi, ""));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue === secret) {
      alert("성공");
    } else alert("다시 입력 ㄱ");

    setInputValue("");
    setSecret(getRandomWord());
    setBgColor(getBackground());

    if (inputRef.current) inputRef.current.focus();
  };

  const onClickCancel = () => {
    setInputValue("");

    if (inputRef.current) inputRef.current.focus();
  };

  useEffect(() => {
    setSecret(getRandomWord());
    setBgColor(getBackground());
  }, []);

  return (
    <div className="justify-center text-center sm:w-[24em] w-[18em] mx-auto sm:my-4 my-8">
      <h2 className="text-[1.2em] font-bold text-[#8173fd]">
        문자를 입력해주세요.
      </h2>
      <div>
        부정 예매 방지를 위해 아래의 문자를 입력해주세요.
        <br />
        인증 후 좌석을 선택할 수 있습니다.
      </div>
      <div
        className="w-full h-[2em] flex justify-center flex-col text-[#c5c205] text-[2em] font-bold mx-auto my-[0.5em] tracking-[0.15em]"
        style={{ backgroundColor: bgColor }}
      >
        {secret}
      </div>
      <form id="form" onSubmit={onSubmit}>
        <input
          type="text"
          maxLength={6}
          placeholder="문자를 입력해주세요."
          className="w-full h-12 px-[0.5em] py-[0.3em] text-[1em] border-2 border-gray-300"
          spellCheck={false}
          value={inputValue}
          onChange={onChange}
          ref={inputRef}
        />
      </form>
      <div className="mt-[1em] text-white text-[1em] grid grid-cols-2 space-x-1">
        <button
          onClick={onClickCancel}
          className="h-[2.5em] bg-gray-500 cursor-pointer"
        >
          날짜 다시 선택
        </button>
        <button
          type="submit"
          form="form"
          className="h-[2.5em] bg-gray-800 cursor-pointer"
        >
          입력완료
        </button>
      </div>
    </div>
  );
}

export default App;
