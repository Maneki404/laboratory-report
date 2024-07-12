import { Avatar, Menu, UnstyledButton } from "@mantine/core";

import { FaTrashAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";

function NavMenu() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton>
          <div className="border-solid border-purple-950 border-opacity-40 border-2 rounded-full bg-purple-50">
            <Avatar src={"profile.png"} radius="xl" size={36} />
          </div>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Profile</Menu.Label>
        <Menu.Item leftSection={<IoSettingsSharp size={14} />}>
          Settings
        </Menu.Item>
        <Menu.Item leftSection={<IoLogOut size={14} />}>Logout</Menu.Item>
        <Menu.Divider />
        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item color="red" leftSection={<FaTrashAlt size={14} />}>
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default NavMenu;
