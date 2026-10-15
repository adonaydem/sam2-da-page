import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Distractors are the Real Enemy',
  description: 'DistractAttack: visual distraction adversarial perturbations on SAM2-based video tracking and segmentation.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>{children}</body>
    </html>
  );
}
