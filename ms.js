function ms(a){
    console.log(a*60);
}
function de(a,b)
{
    if(a%b==0)
    {
        console.log("Can be divided");
    }
    else
    {
        console.log("Can't be divided");
    }
}
function cc(a,b)
{var temp=0
   
    for(var i=0;i<b.length;i++)
    {
        if(a==b[i])
         {       
            temp++;
         }
    }
    console.log("Characters are ",temp);
}
function an(a)
{
    var temp=0;
    for(i=1;i<=a;i++)
    {
        temp=temp+i;
    }
    console.log("Addition is ",temp);
}
function cv(a)
{
 let b=a.split("");
 
    for(var i=0;i<a.length;i++)
    {
        if(b[i]=='a')
        {
          b[i]='1';
            
        }
        if(b[i]=='e')
        {
            b[i]=2;
        }
        if(b[i]=='i')
        {
            b[i]=3;
        }
        if(b[i]=='o')
        {
            b[i]=4;
        }
        if(b[i]=='u')
        {
            b[i]=5;
        }
    }
    b=b.join("");
    console.log(b);
}
function revl(a,b)
{
    var c=a.split(" ");
    var rev_arr=[]
    for(i=0;i<c.length;i++)
    {

        if(c[i].charAt(0)==b)
        {
            for(j=c[i].length;j>=0;j--)
            {
                rev_arr.push(c[i][j]);
            }
            rev_arr[i].join("");
        }
        else
        {
            rev_arr.push(c[i]);
        }
    }
    console.log(rev_arr);
}
function ars(a)
{
    
    var temp=0;
    for(i=0;i<a.length;i++)
    {
        if(a[0]==a[i])
        {
            temp++;
        }
        else
        {
            continue;
        }
    }
    if(temp==a.length)
    {
        console.log(true);
    }
    else
    {
        console.log(false);
    }
}
function dups(a)
{
  var b=new Set(a);
  console.log(Array.from(b));
}
function realval(a)
{
    if(typeof a==='string'||a instanceof String)
    {
        console.log("String");
    }
    if(typeof a==='number'&& isFinite(a))
    {
        console.log("number");
    }
    if(typeof a==='object' && a.constructor === Array)
    {
        console.log("Array");
    }
    if(typeof a==='null')
    {
        console.log("null");
    }
    if(typeof a==='boolean')
    {
        console.log("boolean");
    }
}