export default class Size2 {
  w: number;
  h: number;
  constructor(w: number, h: number) {
      this.w = w;
      this.h = h;
  }
  equal(a: Size2): boolean {
    return a.h === this.h && a.w === this.w;
  };
  toStr(): string {
    return `${this.w} × ${this.h}`;
  }
}
