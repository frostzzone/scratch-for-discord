import * as Blockly from "blockly/core";

const blockName = "s4d_change_nickname";

const blockData = {
    "message0": "change nickname of %1 to %2",
    "args0": [
        {
            "type": "input_value",
            "name": "MEMBER",
            "check": "Member"
        },
        {
            "type": "input_value",
            "name": "STRING",
            "check": "String"
        }
    ],
    "colour": "#175DF2",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const member = Blockly.JavaScript.valueToCode(block, "MEMBER", Blockly.JavaScript.ORDER_ATOMIC);
    const string = Blockly.JavaScript.valueToCode(block, "STRING", Blockly.JavaScript.ORDER_ATOMIC);
    return `${member}.setNickname({nick:${string});\n`;
};
