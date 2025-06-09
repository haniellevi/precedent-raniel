import { BuyMeACoffee } from "../shared/icons";

export default function Footer() {
  return (
    <div className="absolute w-full py-5 text-center">
      <p className="text-gray-500">
        A project by{" "}
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="https://twitter.com/steventey"
          target="_blank"
          rel="noopener noreferrer"
        >
          Steven Tey
        </a>
      </p>
      <a
        href="https://www.buymeacoffee.com/steventey"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-2 flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-6 py-2 transition-all duration-75 hover:scale-105"
      >
        <BuyMeACoffee className="h-6 w-6" />
        <p className="font-medium text-gray-600">Buy me a coffee</p>
      </a>
    </div>
  );
}
// components/layout/footer.tsx
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="absolute w-full py-5 text-center bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {currentYear} SermonAI. Todos os direitos reservados. Desenvolvido por{' '}
        <a
          className="font-medium text-gray-800 dark:text-gray-200 underline transition-colors"
          href="https://seusite.com" // Coloque seu site ou GitHub aqui
          target="_blank"
          rel="noopener noreferrer"
        >
          Seu Nome ou Empresa
        </a>
        .
      </p>
    </div>
  );
}
