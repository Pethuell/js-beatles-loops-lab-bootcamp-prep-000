// add solution here
function theBeatlesPlay(musicians, instrument) {
  var emptyAtFirst = [];
  
  for(let i = 0; i < musicians.length; i++) {
    emptyAtFirst.push("${musicians} plays ${instrument}");
  }

  
}

function johnLennonFacts(facts) {
  let g = 0;
  holder = [];
  while(g < facts.length){
    holder.push(facts[g] + '!!!');
    g++;
  }
  return holder;
}
