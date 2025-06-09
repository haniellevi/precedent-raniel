
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full py-5 text-center border-t">
      <p className="text-sm text-muted-foreground">
        © {currentYear} SermonAI. Todos os direitos reservados.
      </p>
    </div>
  );
}
