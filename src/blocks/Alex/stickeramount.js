import Blockly from "blockly/core";

const blockName = "amount_of_stickers";

const blockData = {
  "message0": "Amount of stickers on message %1",
  "args0": [
    {
      "type": "input_value",
      "check": "Message",
      "name": "message"
    }
  ],
  "output": "Number",
  "colour": "#02a836",
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
const message = Blockly.JavaScript.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);
  const code =  [`${message}.stickers.size`, Blockly.JavaScript.ORDER_NONE ];
  return code;
};
