import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

interface Props {
  children?: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
        themes={["light", "dark", "orange"]}
      >
        {children}
        <Toaster />
      </ThemeProvider>
  );
};