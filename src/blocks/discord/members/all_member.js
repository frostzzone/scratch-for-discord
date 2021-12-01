import Blockly from "blockly/core";

const blockName = "rndm_mber_fetch";

const blockData = {
    "message0": "%{BKY_GET_ALL}",
    "args0": [
        {
            "type": "input_value",
            "name": "SERVER",
            "check": "Server"
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "THEN"
        },
    ],
    "colour": "#a55b80",
    "output": "Member",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const server = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `members = await ${server}.members.fetch();\nrandMember = members.random();`;
    return code;
};
