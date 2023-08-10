// first javascript problem 


function joinedLogger(level, sep) {
    var s=[]
    return function(...msg)
    {
        msg.forEach(arg => {
            if(arg.level>=level)
            {
                s.push(arg.text)
            }
        });
        var ans=String(s.join(sep))
        ws.write(ans)
    
    }
  
}

