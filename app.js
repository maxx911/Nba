const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

const ulParent = document.createElement('ul')
for(let games of warriorsGames){
  const { 
    homeTeam,
    awayTeam
  } = games;


const newLi = document.createElement('li');
const { team : hTeam,
points : hPoints
}= homeTeam;
const {
  team: aTeam,
  points: aPoints
}= awayTeam;
// newLi.innerText =`${aTeam} @ ${hTeam} ${aPoints}- ${hPoints}`;
if(aPoints>hPoints){
 newLi.innerHTML =`${aTeam} @ ${hTeam} <b>${aPoints}</b>- ${hPoints}`;
}
else{
  newLi.innerHTML= `${aTeam} @ ${hTeam} ${aPoints} - <b>${hPoints}</b>`;
}
const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
newLi.classList.add(warriors.isWinner ? 'win' : 'loss');

ulParent.appendChild(newLi);

document.body.prepend(ulParent);

}