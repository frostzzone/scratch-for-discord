import Blockly from "blockly/core";



const blockName = "sticker_on_message";

Blockly.Blocks[blockName] = {
  validate: function(newValue) {
  this.getSourceBlock().updateConnections(newValue);
  return newValue;
},
init: function() {
   var options = [
   [
          "first",
          ".first()"
        ],
        [
          "all",
          ".map(s => s)"
        ],
  ];

  this.appendDummyInput()
    .appendField("Get")
      .appendField(new Blockly.FieldDropdown(options, this.validate), 'get');
this.setOutput('Sticker')
      this.setInputsInline(true);
    this.setColour("#02a836");
  },
  updateConnections: function(newValue) {

  this.removeInput('message', true);
  if (newValue == '.first()') {
this.appendValueInput("message")
        .setCheck("Message")
        .appendField(new Blockly.FieldLabelSerializable("sticker of message"), "message");
  } else if (newValue == '.map(s => s)') {
 this.appendValueInput("message")
        .setCheck("Message")
        .appendField(new Blockly.FieldLabelSerializable("stickers of message"), "message");
  }
}
};


Blockly.JavaScript[blockName] = function(block) {
const message = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);
  const get = block.getFieldValue("get");

  const code =  [`${message}.stickers${get}`, Blockly.JavaScript.ORDER_NONE ];
  return code;
};
