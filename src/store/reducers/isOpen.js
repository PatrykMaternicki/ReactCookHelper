export function isOpen( state = false, action) {
  console.log(action.type);
  switch(action.type) {
    case 'OPEN': return true; 
    case 'CLOSE': return false;
    default: return false;
  }
}