function scuberGreetingForFeet(feet){
  // Write your code here!
  let message;
  if(feet<=400){
    message='This one is on me!';
    return message
  }
  else if(feet>2000 && feet<=2500){
    message='I will gladly take your thirty bucks.';
    return message
  }
  else {
    message='No can do.';
    return message
  }
}
scuberGreetingForFeet(199)
function ternaryCheckCity(city){
  // Write your code here! 
  let message;
  city=='NYC'?message="Ok, sounds good.":message="No go.";
  return message
  

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
  switch(tip){
    case 'generous':
      message="Thank you so much.";
      return message
      break;
    case 'not as generous':
      message='Thank you.';
      return message
      break;
    default:
      message="Bye."
      return message 
      break;
  }

}