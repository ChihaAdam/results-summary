let reaction = document.getElementById("reactionPerc");
let memory = document.getElementById("memoryPerc");
let visual = document.getElementById("visualPerc");
let verbal = document.getElementById("verbalPerc");
const refresh = async ()=>{
    let res = await fetch("./data.json");
    let data = await res.json();
    reaction.textContent = data[0].score;
    memory.textContent = data[1].score;
    verbal.textContent =data[2].score;
    visual.textContent = data[3].score;
}
refresh();