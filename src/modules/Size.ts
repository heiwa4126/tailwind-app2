export default class Size {
  w: number;
  h: number;
  constructor(w: number, h: number) {
      this.w = w;
      this.h = h;
  }
  equal(a: Size): boolean {
    return a.h === this.h && a.w === this.w;
  };
  toStr(): string {
    return `${this.w} × ${this.h}`;
  }
}
