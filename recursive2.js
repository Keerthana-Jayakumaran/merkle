var fs = require('fs');
var crypto = require('crypto');
var uid = require('uid');
var node ={};
var eid;
//var L2hash = [];


var L1hash=[];
// producing hash function
var data = fs.readFileSync('testcases.txt');
var str = data.toString();
var arr = str.split(',');
for(var i=0; i<arr.length;i++)
{
    var hash = crypto.createHash('sha256');
    hash.update(arr[i]);
    var hex = hash.digest('hex');

    console.log(hex +'');
    L1hash[i+1] = hex ;
}

var value = root(1,L1hash.length-1);

function root(start,last)
{
//  var L2hash = L1hash;
    var diff = (last - start) ;

    if((diff + 1) != 2)
    {

        var c ;
        var v;
        // only for even numbers
        if((diff + 1) % 2 == 0)
        {
            var a,b;
            // c = last / 2;
           
            
                var mod = (diff+1) % 4 ;
                // for the even values less than 4 and mod = 0
                if(mod == 0)
                {
                c = (diff + 1) / 2;
                v = (a = root(start,c)) +(b = root(c+1,last)); 
                
                }
                else
                {
                v =(a = root(start,last-mod) )  +(b = root((last-mod)+1,last) ) ; 
            
                }
            

        }
        // only for odd numbers
        else
        {
          
            var mod = (diff+1) % 4 ;

            if(mod == 1 || mod < 4)
            {
                 v = (a = root(start,last-1)  ) + (b = L1hash[last] );
            }
            else
            {
                v = (a = root(start,last-mod) ) +(b = root((last-mod)+1,last) ) ; 
            }
                
        }

        var hash = crypto.createHash('sha256');
        hash.update(v);
        var hex = hash.digest('hex');
        eid = uid();
        node[eid] = {value:hex,left:a,right:b};
    
        // console.log('the root value',hex);
        return hex ;

    }

    else
    {

    var v =  L1hash[start] + L1hash[last];
    var hash = crypto.createHash('sha256');
    hash.update(v);
    var hex1 = hash.digest('hex');
    eid = uid();
    node[eid] = {value:hex1,left:L1hash[start],right:L1hash[last]}
    // hex1 is the intermediate node value or hashed value or root value 
    return hex1 ;

    }

}
console.log('the root is',value);
console.log('the tree structure is',node);
var data = fs.readFileSync('Record.txt');
var h = crypto.createHash('sha256');
h.update(data.toString());
var hx = h.digest('hex');

var check = hx;
var arr = [];
var i=0;
var r = 'b115437cdfa29f88a24fa3b7d1c25d93f3751227ac022119abe083ad8355c3ee';
console.log('the value of check'+ check);
console.log('the value of r'+ r);
auditprocess(check);

function auditprocess(check)
{        var hex,k,index,Lkey;
    
        for(key in node)
        {
            
             k = Object.values(node[key]).lastIndexOf(check);
             if(k > 0)
             {
                 index = k;
                 Lkey = key;
                
             }
        }
    console.log('the key and the index'+' ' +Lkey+''+index);

           
                if(index == 1)
                {
                    flag = 1
                    arr +=' '+ (node[Lkey].right).toString() ;
                   
                }
                else
                {
                    flag = 2 
                    arr +=' ' + (node[Lkey].left).toString();
                   

                }
             
                var hash = crypto.createHash('sha256');
                var v;
                if(flag == 1)
                {
                    v = check + node[Lkey].right ;
                }
                else
                {
                    v = check + node[Lkey].left ;
                }

                hash.update(v);
                hex = hash.digest('hex');
                

                //console.log(hex +'');
               
               

            
            
        
console.log('the value of hex '+ hex);

 if(hex != r)
 {
     auditprocess(hex);
 }

}


console.log('The proof of containing the record 2'+ arr);
