import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-width py-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-primary">
              Arun Perumal
            </h2>

            <p className="mt-3 max-w-md text-muted-foreground">
              Full Stack Developer passionate about building modern,
              scalable and user-friendly web applications.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Arun Perumal. All rights reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 transition hover:text-primary"
          >
            Back to Top
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}