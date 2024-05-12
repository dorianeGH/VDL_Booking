import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PropsWithChildren } from "react";
import { signOutAction } from "./auth.action";
import { LogOut } from "lucide-react";
type LoggedinDropdownProps = PropsWithChildren;

//quand on est logged, en cliquant ca ouvre un dropdown qui propose de logout
export const LoggedInDropdown = (props: LoggedinDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{props.children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => signOutAction()}>
          <LogOut size={16} className='mr-2' />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
