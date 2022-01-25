



//module kavramı jsde ki IIEF mantığıyla aynıdır , sytaxı farklı olsada arka planda IIEF çevrilir

//CommonJS Module Sytax , export ile açıp require import etmeye deniyor
const logger = require('./logger');
logger.log('log mesajı');
// logger.log('log mesajı')
console.log(logger.firstName);


// console.log(module);//node js de çalışır,bütün export modullerimizi buradan ulaşabiliriz tarayıcılar bunu anlamaz
// console.log(window);//sadece browserlarda çalışır , browserlar bütün verileri window altında tutar , node js bunu anlamaz

