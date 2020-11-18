let input = document.querySelector('input');
let textarea = document.querySelector('textarea');
input.addEventListener('change', () => {
    let files = input.files;
    if(files.length === 0) return;
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        var lines = file.toString().split("/\r\n|\n/");
        textarea.value = lines;
        var array = file.toString().split("\n");
        var array1=[];
        for(i=1;i<array.length;i++) {
        array1.push(array[i]);
     }   
      //console.log(array1);
      var k=prompt("k= :");
      console.log(k);
      k=Number(k);
      console.log(k);
      document.getElementById("kValue").innerHTML=`k=${k}`;
      var array2=[];
      var array3=[];
      array2=array1.map(x=>x.split(" "));
      array3=array2.map(element =>Number(element[1]));
      var array4=[];
      array4=array2.map(element =>Number(element[2]));
      console.log(array3);
      console.log(array4);
      var array5=[];
      array5=array2.map(element => Number(element[0]));
      console.log(array5);
      var array6=[];
      array6=array2.map(element =>element[3]);
      console.log(array6);
      function findMax(arr){
         return Math.max(...arr);
      }
      function findMin(arr){
         return Math.min(...arr);
      }
        var max1=findMax(array3);
        var max2=findMax(array4);
        var min1=findMin(array3);
        var min2=findMin(array4);
        //console.log(max1,max2,min1,min2);
     for(var u=0;u<array3.length;u++)
     {
         array3[u]=(array3[u]-min1)/(max1-min1);
     }
     //console.log(array3);
     for(var u=0;u<array4.length;u++)
     {
        array4[u]=(array4[u]-min2)/(max2-min2);
     }
    //console.log(array4);
    var newarray = array3.map(function(c, i) { return [c, array4[i]]});
    console.log(newarray);
    //Тепер потрібно зробити відстань Чебишова
    var Classified=prompt("Перший параметр:");
    var Classified1=prompt("Другий параметр:");
    //var toBeClassified=[162,83];
    var toBeClassified=[Number(Classified),Number(Classified1)];
    toBeClassified[0]=(toBeClassified[0]-min1)/(max1-min1);
    toBeClassified[1]=(toBeClassified[1]-min2)/(max2-min2);
    document.getElementById('toBeClassifiedData').innerHTML=`Перший параметр:${Classified}<br/> Другий параметр:${Classified1}`;
    console.log(toBeClassified);
    for(var v=0;v<newarray.length;v++){
        for(var w=0;w<newarray[v].length;w++){
            if(w===0){
             newarray[v][w]=Math.abs(newarray[v][w]-toBeClassified[0]);
            }
            if(w===1){
                newarray[v][w]=Math.abs(newarray[v][w]-toBeClassified[1]);
            }
        }
    }
      for(var e=0;e<newarray.length;e++){
        newarray[e]=findMax(newarray[e]);
    }
    //console.log(newarray);
    //console.log(newarray);
    var chebishovlength=newarray;
    //console.log(chebishovlength);
    var newarray1 = array5.map(function(c, i) { return [ c, chebishovlength[i] ]});
    console.log(newarray1);
    var newarray2 = newarray1.map(function(c, i) { return [ c, array6[i] ] });
    console.log(newarray2);
    newarray2.sort(compareSecondColumn);
    function compareSecondColumn(a, b) {
      if (a[0][1] === b[0][1]) {
        return 0;
      }
      else {
        return (a[0][1] < b[0][1]) ? -1 : 1;
      }
}
      console.log(newarray2);
      newarray2=newarray2.slice(0,k);
      console.log(newarray2);
      var count1=0;
      var count2=0;
      for(var l=0;l<newarray2.length;l++)
      {
          for(var t=0;t<newarray2[l].length;t++){
           if(newarray2[l][t]==='yes\r'){
               count1++;
           }
           if(newarray2[l][t]==='no\r'){
            count2++;
        }
      }
    }
      console.log(count1,count2);
      var a="";
      if(count1>count2){
          a="Мітка прийматиме значення так"
      }
      a="Мітка прийматиме значення ні"
      document.getElementById('mitka').innerHTML=a;
  };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file); 
});
