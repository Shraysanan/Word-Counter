let count = 0
let re = /\s+/g;
document.getElementById('submit_button1').addEventListener('click',function(){
  let input=document.getElementById('staticbox').value.trim()
  while (re.exec(input) !== null) {
    ++count;
  }
  if(input!==''){
    count++;
  }
alert("the number of words in text were:"+String(count));
});

function mykeypress(){
  var myvalue=document.getElementById('dynamicbox').value.trim();
  var counter=document.getElementById('counter');
  var dynamic_Count=0;
  if(myvalue!==''){
    dynamic_Count=myvalue.split(re).length;
  }
  counter.innerText="words:"+dynamic_Count;
}
