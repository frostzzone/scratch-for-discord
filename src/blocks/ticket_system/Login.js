import * as Blockly from "blockly/core";

const blockName = "ticket_connect";

const blockData = {
    "type": "block_type",
    "message0": "Login to mongo with the URL %1",
    "args0": [
        {
            "type": "input_value",
            "name": "URL",
            "check": "String"
        },
        {
            "type": "input_value",
            "name": "BOOLEAN",
            "check": "BOOLEAN"
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
    const value = Blockly.JavaScript.valueToCode(block, "URL", Blockly.JavaScript.ORDER_ATOMIC) || `"local"`;
    const logs = Blockly.JavaScript.valueToCode(block, "BOOLEAN", Blockly.JavaScript.ORDER_ATOMIC) || true;
    const code = `//ticketv3.0.0 login code\nticket.start(s4d.client, ${value}, ${logs})`;
    return code;
};
