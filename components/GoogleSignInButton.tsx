import { FC, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

interface GoogleSignInButtonProps {
    children?: ReactNode;
}

const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
 const signInWithGoogle = () => signIn("google");
    return (
    <Button
      onClick={() => {signInWithGoogle()}}
      
      className="w-full">
      {children}
    </Button>
  );
};

export default GoogleSignInButton;