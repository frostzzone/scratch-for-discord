
import Blockly from "blockly/core";

const blockName = "cpu";

const blockData = {
    "message0": "Cpu Usage",
    "args0": [
    ],
    "output": "String",
    "colour": "#40BF4A",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ['obj', Blockly.JavaScript.ORDER_NONE ];
    return code;
};
