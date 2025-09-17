let stu ={
    name: 'uday',
    age: 20,
    eng:95,
    math:93,
    phy:97,

    getAvg() {
        let avg = (this.eng + this.math + this.phy)/3;
        console.log(this.name," got avh marks : ",avg);
    }
}

stu.getAvg();