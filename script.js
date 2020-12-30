function toCapitalCase (str) {
if (str==='') {console.log('Vvedena pustaya stroka')}
else {
        var str1=str[0].toUpperCase();
        for(var i=0;i<str.length-1;i++) {
            if (str[i]===' ') {
                str1=str1+str[i+1].toUpperCase();    
            }
            else {
                str1=str1+str[i+1]
            }
        }
        console.log(str1);
        }
}

stroka = prompt('Vvedite stroku');
toCapitalCase(stroka);