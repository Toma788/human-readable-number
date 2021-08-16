module.exports = function toReadable (number) {
    if (number < 0 || number > 1000) {
        return `wrong number`;
    };  
    if (number === 0) {
       return 'zero';
    };
  
    const arrEd = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const arrDes = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    const arrHund = ['','one hundred','two hundred','three hundred','four hundred','five hundred','six hundred','seven hundred','eight hundred','nine hundred'];
    if (number < 20) { 
     const resTw = arrEd[number];
     return resTw;
      
    } else   
    if (number >= 20 && number < 91 && number % 10 == 0) {
      const resDesr = arrDes[number / 10];
      return resDesr;
    } else
    if (number >= 100 && number < 901 && number % 100 == 0) {
      const resHundr = arrHund[number / 100];
      return resHundr;
    } else if (number % 100 < 20 ) {
      let ed = number % 100;
      number = Math.floor(number / 100);
      let resHund = number % 10;
      let result1 = `${arrHund[resHund]} ${arrEd[ed]}`;
      return result1.trim();
   }   else {
      let resEd = number % 10;
      number = Math.floor(number / 10);
      let resDes = number % 10;
      number = Math.floor(number / 10);
      let resHund = number % 10;
      let result = `${arrHund[resHund]} ${arrDes[resDes]} ${arrEd[resEd]}`;
      return result.trim();
      
  };
}
