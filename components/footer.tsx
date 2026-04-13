import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-medium mb-4">IIA Technology</h3>
            <p className="text-background/60 text-sm leading-relaxed mb-4 max-w-sm">
              A registered training provider with HRDCorp Malaysia, delivering
              professional training in Cyber Security, IT, AI, and General
              business skills.
            </p>
            <p className="text-sm text-background/40">
              HRDCorp Registered Training Provider
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/consultants"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  Consultants
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Training Categories */}
          <div>
            <h4 className="font-medium mb-4 text-sm">Training</h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/training/cyber-security"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link
                  href="/training/it"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  IT
                </Link>
              </li>
              <li>
                <Link
                  href="/training/ai"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  AI
                </Link>
              </li>
              <li>
                <Link
                  href="/training/general"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  General
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-xs text-background/40 text-center">
            &copy; {new Date().getFullYear()} IIA Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
