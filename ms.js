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