let other = 's-remontom|ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium|kvartiry|kottedzhi|taunkhausy|pomeshcheniya|rassrochka|stroyashchiyesya|sdannyye|odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye';
let country = '(ru|uk)'; //1
let separator = '(?:[-]{0,1})?';
let region = `${separator}(?:([a-z]{5,17}[\-a-z]{0,13})(?:-oblast))?`; //2
let city = `${separator}((?!${other})[a-z]*(?=[-_]?)[a-z]*)?`; //3
let cityRegion = '(?:(?:-rayon-)([a-z]{4,25}))?'; //4
let cityMetro = '(?:(?:-metro-)([a-z]{4,25}))?'; //5
let cityRiverside = `${separator}(levyy-bereg|pravyy-bereg)?`; //6
let cityCloseToMetro = `${separator}(vozle-metro)?`; //7
let street = '(?:(?:-ulitsa-)([a-z]{4,25}))?'; //8
let ready = `${separator}(sdannyye)?`; //9
let build = `${separator}(stroyashchiyesya)?`; //10
let type = `${separator}(kvartiry|kottedzhi|taunkhausy|pomeshcheniya)?`;//11
let classs = `${separator}(ekonom-klassa|standart|biznes-klassa|elit-klassa|dachnyy|komfort-klassa|premium)?`; //12
let rooms = `${separator}(odnokomnatnyye|dvukhkomnatnyye|trekhkomnatnyye|chetyrekhkomnatnyye)?`; //13
let payment = `${separator}(rassrochka)?`; //14
let repair = `${separator}(s-remontom)?`; //15
let urlRegex = new RegExp('^\/'+country+'(?:\/novostroyki)'+region+city+cityRegion+cityMetro+cityRiverside+cityCloseToMetro+street+ready+build+type+classs+rooms+payment+repair+'$','i');
// let str = '/uk/novostroyki-kiev-pomeshcheniya';
// console.log(str.match(urlRegex));


let url = [
    '/ru/novostroyki-ekonom-klassa',
    '/ru/novostroyki-biznes-klassa',
    '/ru/novostroyki-elit-klassa',
    '/ru/novostroyki-komfort-klassa',
    '/ru/novostroyki-sdannyye',
    '/ru/novostroyki-stroyashchiyesya',
    '/ru/novostroyki-kiyevskaya-oblast',
    '/ru/novostroyki-kiyevskaya-oblast-kiev',
    '/ru/novostroyki-kiyevskaya-oblast-ekonom-klassa',
    '/ru/novostroyki-kiyevskaya-oblast-biznes-klassa',
    '/ru/novostroyki-kiyevskaya-oblast-elit-klassa',
    '/ru/novostroyki-kiyevskaya-oblast-komfort-klassa',
    '/ru/novostroyki-kiyevskaya-oblast-sdannyye',
    '/ru/novostroyki-kiyevskaya-oblast-stroyashchiyesya',
    '/ru/novostroyki-kiyevskaya-oblast-kiev-rayon-goloseevskii',
    '/ru/novostroyki-kiyevskaya-oblast-kiev-metro-nivki',
    '/ru/novostroyki-kiev',
    '/ru/novostroyki-taunkhausy',
    '/ru/novostroyki-taunkhausy-ekonom-klassa',
    '/ru/novostroyki-kiev-taunkhausy',
    '/ru/novostroyki-kiev-kottedzhi',
    '/ru/novostroyki-kiev-pomeshcheniya',
    '/ru/novostroyki-kiev-pravyy-bereg',
    '/ru/novostroyki-kiev-levyy-bereg',
    '/ru/novostroyki-kiev-rayon-goloseevskii',
    '/ru/novostroyki-kiev-metro-nivki',
    '/ru/novostroyki-kiev-ulitsa-pushkina',
    '/ru/novostroyki-kiev-ulitsa-boiko',
    '/ru/novostroyki-kiev-odnokomnatnyye',
    '/ru/novostroyki-kvartiry-odnokomnatnyye',
    '/ru/novostroyki-kvartiry-dvukhkomnatnyye',
    '/ru/novostroyki-kvartiry-trekhkomnatnyye',
    '/ru/novostroyki-kvartiry-chetyrekhkomnatnyye',
    '/ru/novostroyki-kiev-kvartiry-odnokomnatnyye',
    '/ru/novostroyki-kiev-kvartiry-dvukhkomnatnyye',
    '/ru/novostroyki-kiev-kvartiry-trekhkomnatnyye',
    '/ru/novostroyki-kiev-kvartiry-chetyrekhkomnatnyye',
    '/ru/novostroyki-odnokomnatnyye',
    '/ru/novostroyki-sdannyye-kvartiry',
    '/ru/novostroyki-kiev-sdannyye',
    '/ru/novostroyki-kiev-sdannyye-kvartiry',
    '/ru/novostroyki-kiev-stroyashchiyesya',
    '/ru/novostroyki-kiev-ekonom-klassa',
    '/ru/novostroyki-kiev-biznes-klassa',
    '/ru/novostroyki-kiev-elit-klassa',
    '/ru/novostroyki-kiev-komfort-klassa',
    '/ru/novostroyki-kvartiry',
    '/ru/novostroyki-kiev-kvartiry',
    '/ru/novostroyki-rassrochka',
    '/ru/novostroyki-kiev-rassrochka',
    '/ru/novostroyki-kiev-vozle-metro',
    '/ru/novostroyki-kiev-s-remontom',
    '/ru/novostroyki-s-remontom',
    '/ru/novostroyki-kvartiry-s-remontom',
    '/ru/novostroyki-kiev-kvartiry-s-remontom',
    '/ru/novostroyki-brovary',
    '/ru/novostroyki-brovary-vozle-metro-s-remontom',
    '/ru/novostroyki-kiyevskaya-oblast-taunkhausy',
    '/ru/novostroyki-kiyevskaya-oblast-taunkhausy-ekonom-klassa',
    '/ru/novostroyki-kiyevskaya-oblast-kottedzhi',
    '/ru/novostroyki-kiev-rayon-goloseevskii-taunkhausy',
    '/ru/novostroyki-kiev-rayon-goloseevskii-kottedzhi',
    '/ru/novostroyki-kiev-rayon-goloseevskii-kvartiry',
    '/ru/novostroyki-kiev-ulitsa-boiko-kvartiry',
    '/ru/novostroyki-kiev-metro-nivki-kvartiry',
    '/uk/novostroyki-ekonom-klassa',
    '/uk/novostroyki-biznes-klassa',
    '/uk/novostroyki-elit-klassa',
    '/uk/novostroyki-komfort-klassa',
    '/uk/novostroyki-sdannyye',
    '/uk/novostroyki-stroyashchiyesya',
    '/uk/novostroyki-kiyevskaya-oblast',
    '/uk/novostroyki-kiyevskaya-oblast-kiev',
    '/uk/novostroyki-kiyevskaya-oblast-ekonom-klassa',
    '/uk/novostroyki-kiyevskaya-oblast-biznes-klassa',
    '/uk/novostroyki-kiyevskaya-oblast-elit-klassa',
    '/uk/novostroyki-kiyevskaya-oblast-komfort-klassa',
    '/uk/novostroyki-kiyevskaya-oblast-sdannyye',
    '/uk/novostroyki-kiyevskaya-oblast-stroyashchiyesya',
    '/uk/novostroyki-kiyevskaya-oblast-kiev-rayon-goloseevskii',
    '/uk/novostroyki-kiyevskaya-oblast-kiev-metro-nivki',
    '/uk/novostroyki-kiev',
    '/uk/novostroyki-taunkhausy',
    '/uk/novostroyki-taunkhausy-ekonom-klassa',
    '/uk/novostroyki-kiev-taunkhausy',
    '/uk/novostroyki-kiev-kottedzhi',
    '/uk/novostroyki-kiev-pomeshcheniya',
    '/uk/novostroyki-kiev-pravyy-bereg',
    '/uk/novostroyki-kiev-levyy-bereg',
    '/uk/novostroyki-kiev-rayon-goloseevskii',
    '/uk/novostroyki-kiev-metro-nivki',
    '/uk/novostroyki-kiev-ulitsa-pushkina',
    '/uk/novostroyki-kiev-ulitsa-boiko',
    '/uk/novostroyki-kiev-odnokomnatnyye',
    '/uk/novostroyki-kvartiry-odnokomnatnyye',
    '/uk/novostroyki-kvartiry-dvukhkomnatnyye',
    '/uk/novostroyki-kvartiry-trekhkomnatnyye',
    '/uk/novostroyki-kvartiry-chetyrekhkomnatnyye',
    '/uk/novostroyki-kiev-kvartiry-odnokomnatnyye',
    '/uk/novostroyki-kiev-kvartiry-dvukhkomnatnyye',
    '/uk/novostroyki-kiev-kvartiry-trekhkomnatnyye',
    '/uk/novostroyki-kiev-kvartiry-chetyrekhkomnatnyye',
    '/uk/novostroyki-odnokomnatnyye',
    '/uk/novostroyki-sdannyye-kvartiry',
    '/uk/novostroyki-kiev-sdannyye',
    '/uk/novostroyki-kiev-sdannyye-kvartiry',
    '/uk/novostroyki-kiev-stroyashchiyesya',
    '/uk/novostroyki-kiev-ekonom-klassa',
    '/uk/novostroyki-kiev-biznes-klassa',
    '/uk/novostroyki-kiev-elit-klassa',
    '/uk/novostroyki-kiev-komfort-klassa',
    '/uk/novostroyki-kvartiry',
    '/uk/novostroyki-kiev-kvartiry',
    '/uk/novostroyki-rassrochka',
    '/uk/novostroyki-kiev-rassrochka',
    '/uk/novostroyki-kiev-vozle-metro',
    '/uk/novostroyki-kiev-s-remontom',
    '/uk/novostroyki-s-remontom',
    '/uk/novostroyki-kvartiry-s-remontom',
    '/uk/novostroyki-kiev-kvartiry-s-remontom',
    '/uk/novostroyki-brovary',
    '/uk/novostroyki-brovary-vozle-metro-s-remontom',
    '/uk/novostroyki-kiyevskaya-oblast-taunkhausy',
    '/uk/novostroyki-kiyevskaya-oblast-taunkhausy-ekonom-klassa',
    '/uk/novostroyki-kiyevskaya-oblast-kottedzhi',
    '/uk/novostroyki-kiev-rayon-goloseevskii-taunkhausy',
    '/uk/novostroyki-kiev-rayon-goloseevskii-kottedzhi',
    '/uk/novostroyki-kiev-rayon-goloseevskii-kvartiry',
    '/uk/novostroyki-kiev-ulitsa-boiko-kvartiry',
    '/uk/novostroyki-kiev-metro-nivki-kvartiry'
 ];

function test (url, urlRegex) {
	url.map(function(str){
		console.log(str.match(urlRegex));
	});
};

test(url, urlRegex);

