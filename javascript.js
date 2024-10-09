

function myFunction(){
    document.getElementById("error").innerHTML = " " ;
    let card_id = document.getElementById("National ID card").value;

    if(card_id.length == 14 && isNaN(Number(card_id)) == false   ){
        let theGender = card_id.charAt(12);
        if(theGender % 2 == 0){
            document.getElementById("Gender").innerHTML = "انثى" ;
        }else {
            document.getElementById("Gender").innerHTML = "ذكر" ;
        }
        let city = card_id.slice(7,9)
        switch (city){
            case "01":
                document.getElementById("City").innerHTML = "القاهرة" ;
            break
            case "02":
                document.getElementById("City").innerHTML = "الإسكندرية" ;
            break
            case "03	":
                document.getElementById("City").innerHTML = "بورسعيد" ;
            break
            case "04":
                document.getElementById("City").innerHTML = "السويس" ;
            break
            case "11":
                document.getElementById("City").innerHTML = "دمياط" ;
            break
            case "12":
                document.getElementById("City").innerHTML = "الدقهلية" ;
            break
            case "13":
                document.getElementById("City").innerHTML = "الشرقية" ;
            break
            case "14":
                document.getElementById("City").innerHTML = "القليوبية" ;
            break
            case "15":
                document.getElementById("City").innerHTML = "كفر الشيخ	" ;
            break
            case "16":
                document.getElementById("City").innerHTML = " الغربية" ;
            break
            case "17":
                document.getElementById("City").innerHTML = "المنوفية" ;
            break
            case "18":
                document.getElementById("City").innerHTML = "البحيرة" ;
            break
            case "19":
                document.getElementById("City").innerHTML = "الإسماعيلية" ;
            break
            case "21":
                document.getElementById("City").innerHTML = "الجيزة" ;
            break
            case "22":
                document.getElementById("City").innerHTML = "بني سويف	" ;
            break
            case "23":
                document.getElementById("City").innerHTML = "الفيوم" ;
            break
            case "24":
                document.getElementById("City").innerHTML = "المنيا" ;
            break
            case "25":
                document.getElementById("City").innerHTML = "أسيوط" ;
            break
            case "26":
                document.getElementById("City").innerHTML = "سوهاج" ;
            break
            case "27":
                document.getElementById("City").innerHTML = "قنا" ;
            break
            case "28":
                document.getElementById("City").innerHTML = "أسوان" ;
            break
            case "29":
                document.getElementById("City").innerHTML = "الأقصر" ;
            break
            case "البحر الأحمر	":
                document.getElementById("City").innerHTML = "الأقصر" ;
            break
            case "32":
                document.getElementById("City").innerHTML = "الوادى الجديد	" ;
            break
            case "33":
                document.getElementById("City").innerHTML = "مطروح" ;
            break
            case "34":
                document.getElementById("City").innerHTML = "شمال سيناء	" ;
            break
            case "35":
                document.getElementById("City").innerHTML = "جنوب سيناء	" ;
            break
            case "88":
                document.getElementById("City").innerHTML = "خارج الجمهورية" ;
            break
            default :
            document.getElementById("City").innerHTML = "لم يتم التعرف علي المحافظة" ;
        }
        let Century = card_id.charAt(0);
        let Year = card_id.slice(1,3);
        let Month = card_id.slice(3,5);
        let Day = card_id.slice(5,7);
        if(Century == 2 ){
            document.getElementById("Century").innerHTML = "من سنة 1900 حتى سنة 1999" ;
            document.getElementById("Year").innerHTML = ` 19${Year}` ;

        }else if(Century == 3){
            document.getElementById("Century").innerHTML = "من سنة 2000 حتى سنة 2099 " ;
            document.getElementById("Year").innerHTML = ` 20${Year}` ;

        }else{
            document.getElementById("Century").innerHTML = " لم يتم التعرف على القرن" ;
            document.getElementById("Year").innerHTML = ` لم يتم التعرف على السنة` ;

        }

        switch(Month){
            case "01" :
                document.getElementById("Month").innerHTML = ` يناير` ;
                break;
            case "02" :
                document.getElementById("Month").innerHTML = `فبراير ` ;
                break;
            case "03" :
                document.getElementById("Month").innerHTML = ` مارس` ;
                break;
            case "04" :
                document.getElementById("Month").innerHTML = `أبريل ` ;
                break;
            case "05" :
                document.getElementById("Month").innerHTML = ` مايو` ;
                break;
            case "06" :
                document.getElementById("Month").innerHTML = `يونيو ` ;
                break;
            case "07" :
                document.getElementById("Month").innerHTML = ` يوليو` ;
                break;
            case "08" :
                document.getElementById("Month").innerHTML = `أغسطس ` ;
                break;
            case "09" :
                document.getElementById("Month").innerHTML = `سبتمبر ` ;
                break;
            case "10" :
                document.getElementById("Month").innerHTML = ` أكتوبر` ;
                break;
            case "11" :
                document.getElementById("Month").innerHTML = ` نوفمبر` ;
                break;
            case "12" :
                document.getElementById("Month").innerHTML = `ديسمبر ` ;
                break;
            default :
            document.getElementById("Month").innerHTML = `لم يتم التعرف على الشهر` ;

        }


        if(Day > 31){
            document.getElementById("Day").innerHTML = ` لم يتم التعرف على اليوم` ;

        }else{
            document.getElementById("Day").innerHTML = ` ${Day}` ;

        }



    }else{  
        document.getElementById("error").innerHTML = "worng number" ;
        document.getElementById("Gender").innerHTML = " " ;
        document.getElementById("City").innerHTML = " " ;
        document.getElementById("Century").innerHTML = " "  ;
        document.getElementById("Year").innerHTML = ` ` ;
        document.getElementById("Month").innerHTML = ` ` ;
        document.getElementById("Day").innerHTML = ` ` ;
    }






}



function reset(){
    document.getElementById("Gender").innerHTML = " " ;
    document.getElementById("City").innerHTML = " " ;
    document.getElementById("Century").innerHTML = " "  ;
    document.getElementById("Year").innerHTML = ` ` ;
    document.getElementById("Month").innerHTML = ` ` ;
    document.getElementById("Day").innerHTML = ` ` ;
    document.getElementById("error").innerHTML = " " ;






}


