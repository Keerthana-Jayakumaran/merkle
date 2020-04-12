// im testing the ssh connection with this repo.
// im testing the ssh connection with this repo again


// var a = [1,2,3,4,5];
// // console.log('values'+a[0,4].length);


//  test(0,2);

// function test(start,last)
// {
//     for(i = start ; i <= last ; i++)
//     {
//         console.log('values'+a[i]);
//     }
// }
//..........................................................
// var fs = require('fs');
// var crypto = require('crypto');

// var L2hash = [];

// var L1hash=[];
// // producing hash function
// var data = fs.readFileSync('testcases.txt');
// var str = data.toString();
// var arr = str.split(',');
// console.log('arr.length'+arr.length);
// for(var i=0; i< arr.length;i++)
// {
// var hash = crypto.createHash('sha256');
// hash.update(arr[i]);
// var hex = hash.digest('hex');

// console.log(hex +'');
// L1hash[i+1] = hex ;
// }
// console.log('....................................');
// console.log( L1hash.length)
// for(var i=0; i<= L1hash.length;i++)
// {
// console.log(L1hash[i]) ;
// }
//..............................................
// var uid = require('uid');
// var node = {};
// eid = uid();
// L1hash = ['24','77']
// node[eid] = { left:L1hash[0],right:L1hash[1]};
// console.log('the node value',node);
//..................................................
// date : 13/11/17   Testing algorithm of audit proof

var crypto = require('crypto');
 var node = {
      'et99y9r':
      { value: '33b675636da5dcc86ec847b38c08fa49ff1cace9749931e0a5d4dfdbdedd808a',
      left: '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b',
       right: 'd4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35'
     },
  '9uvflw9':
   { value: '13656c83d841ea7de6ebf3a89e0038fea9526bd7f686f06f7a692343a8a32dca',
     left: '4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce',
     right: '4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a' },
  gaxojgr:
   { value: '85df8945419d2b5038f7ac83ec1ec6b8267c40fdb3b1e56ff62f6676eb855e70' ,
       left: '33b675636da5dcc86ec847b38c08fa49ff1cace9749931e0a5d4dfdbdedd808a',
     right: '13656c83d841ea7de6ebf3a89e0038fea9526bd7f686f06f7a692343a8a32dca',
     },
  '0u2mtth':
   { value: '43587f59c00a8e528bc7636fabaffcf70cc25afc5b4d53df797faf0dc72f6dd0',
     left: 'ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d',
     right: 'e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683' },
  '8hsljxs':
  { value: 'b115437cdfa29f88a24fa3b7d1c25d93f3751227ac022119abe083ad8355c3ee' ,
      left: '85df8945419d2b5038f7ac83ec1ec6b8267c40fdb3b1e56ff62f6676eb855e70',
    
     right: '43587f59c00a8e528bc7636fabaffcf70cc25afc5b4d53df797faf0dc72f6dd0',
     } 
    }

var check = '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b';
//var check ='33b675636da5dcc86ec847b38c08fa49ff1cace9749931e0a5d4dfdbdedd808a';
//...............................................................
// finding the last index.
// var k,index;
// for(key in node)
// {
//          k = Object.values(node[key]).lastIndexOf(check);
//     if(k>0)
//     {
//         index = k;
//     }

//      console.log('key and k'+' '+key+' ' +k);
  
// }
//   console.log('the last index value'+ ' '+ index)
//...........................................................

var check = '6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b';
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
                    //arr += key;

                }
                else
                {
                    flag = 2 
                    arr +=' ' + (node[Lkey].left).toString();
                    //arr += key;

                }
               // console.log('k value'+' '+ k);  
                //console.log('the array length'+arr.length)
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
console.log('the value of root'+ ' '+ r)
 if(hex != r)
 {
     auditprocess(hex);
 }

}


console.log('the array'+ arr);










