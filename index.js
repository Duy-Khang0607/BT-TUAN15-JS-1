
// --------------CÂU 1 : NHẬP ĐIỂM THÍ SINH ------------
/*Viết chương trình nhập điểm của thí sinh với 3 môn thi,khu vực, đối tượng thi
- */

function finalExam1(areaA, areaB) {
    const source = 7;
    const math = 9;
    const physc = 9;
    const chemmis = 8;
    var sum = 0;
    sum = math + physc + chemmis + areaA + areaB;
    console.log(sum);
}
// console.log(finalExam1(3, 2));


// ---------CÂU 2:  TÍNH TIỆN ĐIỆN--------------
function sellElectric(kw) {
    var price = 0;
    if (kw <= 50) {
        price = kw * 500;
    }
    else if (kw <= 100) {
        price = 50 * 500 + (kw - 50) * 650;
    }
    else if (kw <= 200) {
        price = 50 * 500 + 50 * 650 + (kw - 100) * 850;
    }
    else if (kw <= 350) {
        price = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
    }
    else {
        price = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
    }
    console.log(price);
}
sellElectric(70);