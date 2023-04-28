export default function formatCEP(cep: string) {
  if (cep.length === 8) {
    return cep
      .replace(/\D/g, '')
      .slice(0, 8).replace(/^(\d{5})(\d{3})/, '$1-$2');
  }

  return cep;
}
