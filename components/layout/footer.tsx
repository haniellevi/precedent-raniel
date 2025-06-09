
export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              © 2024 SermonAI. Todos os direitos reservados.
            </span>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <a href="/terms" className="hover:text-foreground transition-colors">
              Termos
            </a>
            <a href="/privacy" className="hover:text-foreground transition-colors">
              Privacidade
            </a>
            <a href="/contact" className="hover:text-foreground transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
