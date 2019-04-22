
/**
 *
 *
 * @class Button
 * @extends {Component}
 */
class  Button extends Component
{

    /**
     *Creates an instance of Button.
     * @param {string} id Name Id of component
     * @param {(ImageData|string)} content The image or text in this component
     * @param {number} x The x axis  coordinate
     * @param {number} y The y axis  coordinate
     * @param {number} width The width of this component in canvas
     * @param {number} height The height of this component in canvas
     * @memberof Button
     */
    constructor (id,content,x,y,width,height,event_controller){

        super(id,content,x,y,width,height,true);


    }
    /**
     * create a button instance by resource objcet
     *
     * @static
     * @param {Object} obj Obj in resource class
     * @returns button instance
     * @memberof Button
     */
    static getButton(obj){
       return new Button(obj.id,obj.content,obj.x,obj.y,obj.content.width,obj.content.height,true);

    }
    /**
     *create a button instance with three parameters
     *
     * @static
     * @param {string} id Name Id of component
     * @param {(ImageData|string)} content The image or text in this component 
     * @param {number} x The x axis  coordinate
     * @param {number} y The y axis  coordinate
     * @returns button instance
     * @memberof Button
     */
    static getButton2(id,content,x,y){

       return new Button(id,content,x,y,content.width,content.height,true);
    }
    /**
     * update this Component for updateFrame function in GameScense
     * @memberof Button
     */
    update(){
        CTX.clearRect(this.x,this.y,this.content.width,this.content.height);
        CTX.drawImage(this.content, this.x,this.y);
    }
    excuteClick(){
        this.event_controller.clickEvent();
    }
    init(){
    var return_to_game = Button.getButton('return_to_game',50,250,1,3,'Return');
        return_to_game.addClickEvent(new NewSceneEvent(new MainScene()));
    console.log("Instruction Menu Initialized");
var addInstruction = Button.getButton('Add_Ins',50,30,1,3,'Add');
var AddHint= new HintEvent('IMHint');
AddHint.setHintContent('Adds two registers and stores the result in a register \nadd $d, $s, $t');
addInstruction.addLongPressEvent(AddHint);
addInstruction.addClickEvent(AddHint);
this.addComponent(addInstruction,-1);
this.addComponent(return_to_game,-1);
}
}
}
