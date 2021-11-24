import * as Blockly from "blockly/core";

const blockName = "s4d_change_nickname";

const blockData = {
    "message0": "change nickname of %1 to %2 %3",
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
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ],
    "colour": "#33FF74",
    "output": "String",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block){
    const member = Blockly.JavaScript.statementToCode(block, "MEMBER");
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const string = Blockly.JavaScript.statementToCode(block, "STRING");
     const code = `s4d.client.on(${member}.setNickname({nick:${string}}); => {\n${statements}\n});\n`;
    return code;
};
