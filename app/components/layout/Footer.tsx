import Link from "next/link";
import { FileText, Instagram, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-foreground border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                <FileText size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Editexty
              </span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Edit and extract text from PDFs easily with our advanced OCR and
              PDF editing tools.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#features"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Editexty. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">Twitter</span>
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors">
              <span className="sr-only">GitHub</span>
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
