import React, { Suspense } from "react"

export default function ClientLayout({ children }) {
  return (
    <>
      {/* Global theme overrides */}
      <style>{`
        :root {
          --primary: #4CAF50;
          --primary-foreground: #FFFFFF;
          --background: #FFFFFF;
          --foreground: #1E293B;
          --card: #FFFFFF;
          --card-foreground: #1E293B;
          --secondary: #F5F5F5;
          --secondary-foreground: #1E293B;
          --muted: #F5F5F5;
          --muted-foreground: #1E293B;
          --accent: #F5F5F5;
          --accent-foreground: #1E293B;
          --border: #E5E7EB;
          --input: #E5E7EB;
          --ring: #A7F3D0;
        }

        .btn-primary {
          background: var(--primary);
          color: var(--primary-foreground);
        }
        .btn-primary:hover {
          background-image: linear-gradient(
            to right,
            color-mix(in oklch, var(--primary) 85%, black),
            var(--primary)
          );
        }
      `}</style>

      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </>
  )
}
