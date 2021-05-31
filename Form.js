class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    this.name=null;
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Chess");
    this.title.position(displayWidth/2 + 100, 50);

    this.input.position(displayWidth/2 +110 , displayHeight/2 - 40);
    this.button.position(displayWidth/2 +150, displayHeight/2 );

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.name = this.input.value();
      this.greeting.html("Hello " + this.name + "!")
      this.greeting.position(displayWidth/2+70, displayHeight/6);
      gameState="RULE";
    });
  }
}
