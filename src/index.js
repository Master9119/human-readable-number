module.exports = function toReadable (number) {
     
            if (number <= 999 && number >= 0) {
                let b = {
                    hundreds() {
                        hundred = Math.floor(number/100);
                        return hundred;
                    },
                    dozens() {
                        dozen = Math.floor((number-(hundred*100))/10);
                        return dozen;
                    },
                    units() {
                        unit = number-((hundred*100)+(dozen*10));
                        return unit;
                    }
                };
                b.hundreds();
                b.dozens();
                b.units();
         
    var arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    var arr2 = ['ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number === 0) return 'zero';
    if (number < 20) return arr[number];
var res = arr2[Math.floor(number / 10) - 2];

	if (number >= 20 && number < 100){
		if (number % 10 == 0) {
			return  arr2[(number / 10)-1];
} else return (arr2[Math.floor(number / 10) - 1] + ' ' + arr[number % 10]);
    }

if (number > 99) {
	if (number % 100 == 0) {
			return  arr[(number / 100)] +' ' + 'hundred';
		} else if (number % 10 == 0) { 
			return arr[Math.floor(number/100)] +' ' + 'hundred ' + arr2[(Math.floor(number/10) -1)% 10];}
			if (dozen == 0) {
return  arr[Math.floor(number/100)] +' ' + 'hundred ' +  arr[number % 10];
}
if (dozen == 1) {
return  arr[Math.floor(number/100)] +' ' + 'hundred ' +  arr[(number % 10)+10];
}
			} if (unit != 0) {
return  arr[Math.floor(number/100)] +' ' + 'hundred ' + arr2[dozen -1] + ' ' + arr[number % 10];
}
}
}