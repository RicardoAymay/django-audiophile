import Link from "next/link";


export const Navbar = () => {
  let baseUrl = "localhost:3000"
  return (
    <nav className="bg-inherit text-white flex gap-5 text-sm tracking-widest">
      <Link href="/">HOME</Link>
      <Link href="/headphones">HEADPHONES</Link>
      <Link href="/speakers">SPEAKERS</Link>
      <Link href="/earphones">EARPHONES</Link>
    </nav>
  );
};


export const NavbarPages = () => {
  return (
    <nav className="bg-inherit text-white flex gap-10 tracking-widest w-full justify-center -translate-x-12">
      <Link href="/">HOME</Link>
      <Link href="/headphones">HEADPHONES</Link>
      <Link href="/speakers">SPEAKERS</Link>
      <Link href="/earphones">EARPHONES</Link>
  </nav>
  )
}

