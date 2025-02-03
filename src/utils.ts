export default function calcAge(birthYear: number): number {
  let currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}
