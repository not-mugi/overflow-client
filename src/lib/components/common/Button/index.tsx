export interface IButton {
  text: string;
  theme: "dark" | "light";
}

export default function Button({ theme = "light", text = "Button" }: IButton) {
  const styles = {
    theme: {
      light:
        "border border-gray-300 hover:bg-gray-100/50 text-gray-500 text-center text-sm/8 h-9 inline-block py-1 px-3 rounded-sm font-light",
      dark: "text-white border bg-gray-700 hover:bg-gray-500 border-gray-700/50 text-center text-sm/8 h-9 inline-block py-1 px-3 rounded-sm font-light",
    },
  };
  return <button className={`${styles.theme[theme]} cursor-pointer`}>{text}</button>;
}
