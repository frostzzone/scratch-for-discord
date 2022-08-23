import Blockly from "blockly/core";

const blockName = "edit_sticker";

const blockData = {
"message0": "Edit sticker %1 %2 name %3 %4 tags %5 %6 description %7",
  "args0": [
    {
      "type": "input_value",
      "name": "sticker",
      "check": "Sticker"
    },
    {
      "type": "input_space"
    },
    {
      "type": "input_value",
      "name": "name",
      "check": "String"
    },
    {
      "type": "input_space"
    },
    {
      "type": "input_value",
      "name": "tags",
      "check": "String"
    },
    {
      "type": "input_space"
    },
    {
      "type": "input_value",
      "name": "desc",
      "check": "String"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#02a836",
  "tooltip": "",
  "helpUrl": ""
}
  Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
  }
};

Blockly.JavaScript[blockName] = function (block) {
const name = Blockly.JavaScript.valueToCode(block, "name", Blockly.JavaScript.ORDER_ATOMIC);
  const sticker = Blockly.JavaScript.valueToCode(block, "sticker", Blockly.JavaScript.ORDER_ATOMIC);
  const tags = Blockly.JavaScript.valueToCode(block, "tags", Blockly.JavaScript.ORDER_ATOMIC);
    const desc = Blockly.JavaScript.valueToCode(block, "desc", Blockly.JavaScript.ORDER_ATOMIC);
  const code =  `${sticker}.edit({name: ${name}, description: ${desc}, tags: ${tags}}); \n`;
  return code;
};
