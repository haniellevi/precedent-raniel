
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full py-5 text-center bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {currentYear} SermonAI. Todos os direitos reservados. Desenvolvido por{' '}
        <a
          className="font-medium text-gray-800 dark:text-gray-200 underline transition-colors"
          href="https://seusite.com"
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
