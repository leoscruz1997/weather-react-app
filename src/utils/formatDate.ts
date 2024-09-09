export const formatedDate = () => {
  const date = new Date();
  const day = date.getDate();
  const week = date.getDay();
  const month = date.getMonth();
  const daysOfWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  const monthsOfYear = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return `${daysOfWeek[week]}, ${day < 10 ? "0" + day : day} de ${
    monthsOfYear[month]
  }`;
};
