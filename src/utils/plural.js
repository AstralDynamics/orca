export default function(name, n) {
  switch(n) {
    case 0:
      return `No ${name}s`;
    case 1:
      return `1 ${name}`;
    default:
      return `${n} ${name}s`;
  }
}
