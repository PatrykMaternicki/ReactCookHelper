export function view( state = 'MAIN', action) {
  console.log(action.type);
  switch(action.type) {
    case 'MAIN': return 'MAIN'; 
    case 'FORM': return 'FORM';
    default: return 'MAIN';
  }
}