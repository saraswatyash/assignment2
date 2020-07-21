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
    console.log(typeof a);
   a.replace("a","1");
    console.log(a);
    for(var i=0;i<a.length;i++)
    {
        if(a[i]=='a')
        {
           a[i]=1;
            console.log(a[i]);
        }
        if(a[i]='e')
        {
            a[i]=2;
        }
        if(a[i]='i')
        {
            a[i]=3;
        }
        if(a[i]='o')
        {
            a[i]=4;
        }
        if(a[i]='u')
        {
            a[i]=5;
        }
    }
    console.log(a);
}
function revl(a,b)
{
    var c=a.split(" ");
    for(i=0;i<c.length;i++)
    {
        for(j=0;j<c[i].length;j++)
        {
            
            if(c[i][1]=b)
            {
                c[i]=c[i].split("");
                c[i]=c[i].reverse();
                c[i]=c[i].join("");
                
            }
        }
    }
    console.log(c);
    
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