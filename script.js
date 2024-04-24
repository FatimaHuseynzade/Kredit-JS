var emekHaqqi = 1500; 
var mebleg = 5000; 
var muddet = 12; 

function kreditHesabla(emekHaqqi, mebleg, muddet) {
    if (muddet > 36) {
        return "Size bu şertlerle kredit duşmur";
    }

    let  maxKredit = 10 * emekHaqqi;
    if (mebleg > maxKredit) {
        return "Size bu şertlerle kredit duşmur";
    }

  
    let ayliqOdenish = mebleg / muddet;
    if (ayliqOdenish > 0.45 * emekHaqqi) {
        return "Size bu şertlerle kredit duşmur";
    }


    let faizDerecesi;
    if (muddet <= 12) {
        faizDerecesi = 0.13;
    } else if (muddet <= 24) {
        faizDerecesi = 0.15;
    } else {
        faizDerecesi = 0.17;
    }


    var faizMiqdar = mebleg * faizDerecesi * muddet / 12;
    var cemiOdenis = mebleg + faizMiqdar;

    return mebleg + " AZN mebleg size %" + (faizDerecesi * 100) + " ilə " + muddet + " ay muddetine ayliq " + ayliqOdenish + " AZN ödənişlə verilir.";
}

console.log(kreditHesabla(emekHaqqi, mebleg, muddet));
