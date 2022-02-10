import * as Blockly from "blockly/core";


const blockName = "s4d_create_time_then";

const blockData = {
    "message0": "Create new time %2 then %1",
    "args0": [
        {
            "type": "input_statement",
            "name": "THEN"
        },
        {
            "type":"input_dummy"
        }
    ],
    "colour": "#5ba58b",
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
    const statementThen = Blockly.JavaScript.statementToCode(block, "THEN");
    const code = `let d = new Date(); \n ${statementThen}\n`;
    return code;
};