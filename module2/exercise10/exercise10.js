'use strict'

let numbersOfCandidates = parseInt(prompt('What is the number of candidates? '));
let candidateVotes= [];
for(let i=0;i<numbersOfCandidates;i++){
    let candidateName = prompt(`Name for candidate ${i+1}`);
    candidateVotes.push({'name':candidateName,'votes':0});
}

let numbersOfVoters = parseInt(prompt('What is the number of voters? '));
for (let i= 0;i<numbersOfVoters;i++){
    let votedCandidate = prompt('Insert the candidate name that you want to vote: ');
    if(votedCandidate ===''){
        alert('An empty vote.');
    }
    for(let candidate of candidateVotes){
        if(candidate.name === votedCandidate){
            candidate.votes = candidate.votes+1;
        }
    }
}
candidateVotes.sort((a,b) => b.votes-a.votes);
console.log(`The winner is ${candidateVotes[0].name} with ${candidateVotes[0].votes} votes.`);
for(let i= 1; i<candidateVotes.length;i++) {
    if(candidateVotes[i].votes===candidateVotes[i-1].votes){
    console.log(`The winner is ${candidateVotes[i].name} with ${candidateVotes[i].votes} votes.`)}
    else {
        break;
    }
}
console.log('results: ')
for (let result of candidateVotes){
    console.log(`${result.name}: ${result.votes} votes`)
}