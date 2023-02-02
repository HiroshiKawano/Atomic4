import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "じゃけぇ",
  image: "https://source.unsplash.com/T-0EW-SEbsE",
  email: "12345@example.com",
  phone: "090-111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return <Router />;
}
