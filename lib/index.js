import { sayingHello } from './hello';
import { sayingGoodbye } from './goodbye';

document.getElementById("hello-button").addEventListener("click", function(){
  sayingHello()
});

document.getElementById("goodbye-button").addEventListener("click", function(){
  sayingGoodbye()
});
