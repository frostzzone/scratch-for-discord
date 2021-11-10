import * as Blockly from "blockly/core";

const blockName = "aki_start";

const blockData = {
    "type": "block_type",
    "message0": "Start aki with type",
    "args0": [
        {
            "type": "input_value",
            "name": "TYPE",
            "check": "String"
        }
    ],
    "colour": "#F46580",
    "tooltip": "%{BKY_LOGIN_TOOLTIP}",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const type = Blockly.JavaScript.valueToCode(block, "TYPE", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `await aki.start(${type})`;
    return code;
};
