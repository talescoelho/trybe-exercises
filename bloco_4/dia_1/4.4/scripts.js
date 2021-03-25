let statusCandidato = "aprovada";

switch (statusCandidato) {
  case "aprovada":
    console.log("O Candidato está Aprovado(a)");
    break;
  
  case "lista":
    console.log("O Candidato está na lista de espera");
    break;
  
  case "reprovada":
      console.log("O Candidato está Reprovado(a)");
      break;
  
  default:
    console.log("não se aplica");
}