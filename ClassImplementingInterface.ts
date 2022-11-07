interface Dimension1 {
  width1: string,
  height1: string,
  getWidth(): string;
}

class Shapes implements Dimension1 {
  width1: string;
  height1: string;

  constructor(width1: string, height1: string) {
    this.width1 = width1;
    this.height1 = height1;
  }

  getWidth() {
    return this.width1;
  }

}