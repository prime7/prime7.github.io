export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="container mx-auto bg-background text-foreground">
        {children}
      </div>
    );
  }