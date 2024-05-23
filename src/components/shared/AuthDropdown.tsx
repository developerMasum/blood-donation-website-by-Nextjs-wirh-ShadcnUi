import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getUserInfo } from "@/services/actions/auth.services";
import { logoutUser } from "@/services/actions/logoutUser";
import { CircleUser } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const AuthDropdown = () => {
 const userInfo = getUserInfo();
//  console.log(userInfo)
 const router = useRouter();
 const handleLogOut = () => {
   logoutUser(router);
 };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          {userInfo?.id ? (
            <Button onClick={handleLogOut} color="error">
              LogOut
            </Button>
          ) : (
            <Link href="login" >
             Login
            </Link>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AuthDropdown;