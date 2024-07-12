function NavLink({ name = "", href = "" }) {
  return (
    <a
      className="w-full pl-8 pr-8 pt-3 pb-3 self-center text-center text-gray-950 rounded-sm hover:bg-_nav-link-bg hover:bg-opacity-20"
      href={href}
    >
      {name}
    </a>
  );
}

export default NavLink;
