export default interface Size {
  w: number;
  h: number;
}
export const equalSize = (a: Size, b: Size): boolean => {
  return a.h === b.h && a.w === b.w;
};
export const strSize = (a: Size): string => {
  return `${a.w} × ${a.h}`;
};
