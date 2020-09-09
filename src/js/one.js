export function temp(response) {
  const kelvin = response;
  const celsius = Math.floor(kelvin - 273);
  let fahrenheight = Math.floor(celsius * (9 / 5) + 32);
  return fahrenheight;
}
