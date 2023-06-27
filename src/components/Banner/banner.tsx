import "./banner.css";

export function Banner({ text }: { text: string }) {
  return <h1 className="title">{text}</h1>;
}
