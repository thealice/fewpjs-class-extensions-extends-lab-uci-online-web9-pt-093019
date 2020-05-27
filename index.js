// Your code here
class Polygon {
    constructor(sidesArray) {
        this.sides = sidesArray;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        const reducer = (total, side) => total + side;
        return this.sides.reduce(reducer, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if(this.countSides !== 3) {
            return false;
        }
        const side1 = this.sides[0];
        const side2 = this.sides[1];
        const side3 = this.sides[2];
        return !!(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1);
    }
}

class Square extends Polygon {
    get isValid() {
        if(this.countSides !== 4) {
            return false;
        }
        const side1 = this.sides[0];
        const side2 = this.sides[1];
        const side3 = this.sides[2];
        const side4 = this.sides[3];
        return !!(side1 === side2 && side2 === side3 && side3 === side4);
    }

    get area() {
        if(!this.isValid) {return "This is not a valid square, so I can't calculate the area"}
        return (this.sides[0] * this.sides[0]);
    }
}