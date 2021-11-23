import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

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
     const code = `s4d.client.on(${member}.setNickname({nick: message.content.replace('changeNick ', '')}); => {\n${statements}\n});\n`;
    return code;
};

registerRestrictions(blockName, [
    {
        type: "notempty",
        message: "RES_VALID_MEMBER",
        types: [
            "MEMBER" , "STRING"
        ]
    }
]);
