// Your code here
function saturdayFun(action = "roller-skate"){
  return `This Saturday, I want to ${action}!`
}
function mondayWork(action = "go to the office"){
  return `This Monday, I will ${action}.`
}

function wrapAdjective(flair = "*"){
  return function(para = "special"){
    return `You are ${flair}${para}${flair}!`
  }
}
