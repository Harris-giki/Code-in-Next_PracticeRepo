import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      {/* not the optimal way of navigation below */}
      <a href="/users">Users - non optimal way</a>
      <br />
      <Link href="/users">Users - the optimal way</Link>
    </main>
  );
}
