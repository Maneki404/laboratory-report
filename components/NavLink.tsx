function NavLink({ name = "", href = "" }) {
  return (
    <a
      className="w-[10vw] pl-8 pr-8 pt-3 pb-3 self-center text-center text-gray-950 rounded-sm hover:bg-purple-950 hover:bg-opacity-5"
      href={href}
    >
      {name}
    </a>
  );
}

export default NavLink;
