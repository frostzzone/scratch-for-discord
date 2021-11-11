import * as Blockly from "blockly/core";

const blockName = "vc_channel";

const blockData = {
    "message0": "together voice channel",
    "colour": "#40BF4A",
		"args0": [
		],
    "tooltip": null,
    "output": "String",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
  const code = [`s4d.message.member.voice.channel.id`, Blockly.JavaScript.ORDER_NONE];
  return code;
};