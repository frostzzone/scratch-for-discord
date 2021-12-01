import * as Blockly from "blockly/core";
import { registerRestrictions } from "../../../restrictions";

const blockName = "s4d_get_all_member";

const blockData = {
    "message0": "%{BKY_GET_ALL_MEMBER}",
    "args0": [
    ],
    "colour": "#187795",
    "output": "Member",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(){
return [ `nrandMember`, Blockly.JavaScript.ORDER_NONE ];
};
