function ReverseString(str) {
    if(!str || str.length < 2 || typeof str!== 'string')
    {
        return 'Not valid'; 
    }
          
    // Take empty array revArray
    const revArray = [];
    const length = str.length - 1;
    // Looping from the end
    for(let i = length; i >= 0; i--)
    {
        revArray.push(str[i]);
    }
    // Joining the array elements
    return revArray.join('');
    }
    console.log(ReverseString("sahana"))
    // an fun
    let res=function (str) {
    if(!str || str.length < 2 || typeof str!== 'string')
    {
        return 'Not valid'; 
    }
              
    // Take empty array revArray
    const revArray = [];
    const length = str.length - 1;
    // Looping from the end
    for(let i = length; i >= 0; i--)
    {
        revArray.push(str[i]);
    }
    // Joining the array elements
    return revArray.join('');
    }
    console.log(res("sahana"))
    
    // ar fun
    let res1= (str)=> {
        if(!str || str.length < 2 || typeof str!== 'string')
        {
            return 'Not valid'; 
        }
              
        // Take empty array revArray
        const revArray = [];
        const length = str.length - 1;
        // Looping from the end
        for(let i = length; i >= 0; i--)
        {
            revArray.push(str[i]);
        }
        // Joining the array elements
        return revArray.join('');
        }
        console.log(res1("sahana"))