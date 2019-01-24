import { sayingHello } from './hello';
import { sayingGoodbye } from './goodbye';
import Example from './class-example'

const example = new Example()

document.getElementById("hello-button").addEventListener("click", function(){
  sayingHello()
});

document.getElementById("goodbye-button").addEventListener("click", function(){
  sayingGoodbye()
});

document.getElementById("class-example-button").addEventListener("click", function(){
  example.doClassThings()
});
