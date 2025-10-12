import { ArrowUp, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-card border-t border-border mt-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">


        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/balogun-olajide-b34627258/">
            <Linkedin className="w-5 h-5 text-primary" />
          </a>
          <a href="https://web.facebook.com/jide.nyms.2025">
            <Facebook className="w-5 h-5 text-primary" />
          </a>
          <a href="https://www.instagram.com/jidenyms12/">
            <Instagram className="w-5 h-5 text-primary" />
          </a>
          <a href="https://x.com/bal50589?s=21">
            <Twitter className="w-5 h-5 text-primary" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} JideNyms. All rights reserved.
        </p>


        {/* Scroll to Top */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
        </a>

      </div>
    </footer>
  );
};
