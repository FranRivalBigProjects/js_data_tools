function process(){
let input=document.getElementById('input').value||"";
let output="";
let insights="";

// CSV to JSON basic
if(input.includes(",") && input.includes("\n")){
  let rows=input.split("\n");
  let headers=rows[0].split(",");
  let json=[];
  for(let i=1;i<rows.length;i++){
    let obj={};
    let vals=rows[i].split(",");
    headers.forEach((h,j)=>obj[h]=vals[j]);
    json.push(obj);
  }
  output=JSON.stringify(json,null,2);
}

// JSON parse
try{
  let parsed=JSON.parse(input);
  output=JSON.stringify(parsed,null,2);
}catch(e){}

// diff / merge simple
if(input.includes("[") && input.includes("]")){
  insights+="Array detected.<br>";
}
if(input.includes("{") && input.includes("}")){
  insights+="Object detected.<br>";
}

document.getElementById('result').innerHTML =
"<b>Output:</b><pre>"+output+"</pre><br>"+insights;
}
