import type { NextConfig } from "next";

const SECURITY_HEADERS = [
  // Defense against clickjacking — only allow embedding from the same origin.
  // (Set to DENY if you never want the site embedded; SAMEORIGIN keeps the
  // option open for embedding own demos within own pages.)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Stop browsers from MIME-sniffing responses away from the declared
  // Content-Type. Cheap mitigation against a class of XSS via wrong MIME.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Don't leak full URLs (with query strings) when the user clicks an
  // outbound link. Send only the origin to cross-origin destinations.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
};

export default nextConfig;
