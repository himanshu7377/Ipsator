// first problem Sloving 
function getMinCost(crew_id, job_id) {
    
    let cost=0;
    const Crew=crew_id.sort((a,b)=>a-b);
    
    const Job=job_id.sort((a,b)=>a-b)
    
    for(let i=0;i<crew_id.length;i++){
        cost+=Math.abs(Crew[i]-Job[i])
    }
    
     return cost

}
