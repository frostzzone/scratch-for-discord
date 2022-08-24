import * as Blockly from "blockly/core";
import BaseBlockly from "blockly";

import { registerRestrictions } from "../../../restrictions";


const blockName = "s4d_edit_webhook";
const BORDER_FIELDS = ["NAME", "URL", "CHANNEL"];
const BORDER_TYPES = ["String", "String", "Channel"];
const names = ["name", "avatar", "channel"];
const amountOfInputs = names.length
const menuName = 'idk'


const blockData = {
    "message0": "edit webhook",
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};


Blockly.Blocks[menuName] = {
    init: function () {
        this.setColour("4C97FF");
        this.setHelpUrl("");
    }
};
Blockly.Blocks[blockName] = {
    init: function () {
        this.jsonInit(blockData);
        this.setMutator(new Blockly.Mutator([]));
        this.inputs_ = []
        for (let i = 0; i < amountOfInputs; i++) {
            this.inputs_.push(false)
        }
    },


    mutationToDom: function () {
        if (!this.inputs_) {
            return null;
        }
        const container = document.createElement("mutation");
        for (let i = 0; i < this.inputs_.length; i++) {
            if (this.inputs_[i]) container.setAttribute(BORDER_FIELDS[i], this.inputs_[i])
        }
        return container;
    },

    domToMutation: function (xmlElement) {
        for (let i = 0; i < this.inputs_.length; i++) {
            this.inputs_[i] = xmlElement.getAttribute(BORDER_FIELDS[i].toLowerCase()) == "true";
        }
        this.updateShape_();
    },

    decompose: function (workspace) {
        const containerBlock = workspace.newBlock(menuName);
        for (let i = 0; i < this.inputs_.length; i++) {
            BaseBlockly.Msg[BORDER_FIELDS[i]] = names[i];
            containerBlock.appendDummyInput()
                .setAlign(Blockly.ALIGN_LEFT)
                .appendField(new Blockly.FieldCheckbox(this.inputs_[i] ? "TRUE" : "FALSE"), BORDER_FIELDS[i].toUpperCase())
                .appendField(names[i])
        }
        containerBlock.initSvg();
        return containerBlock;
    },

    compose: function (containerBlock) {
        // Set states
        for (let i = 0; i < this.inputs_.length; i++) {
            this.inputs_[i] = (containerBlock.getFieldValue(BORDER_FIELDS[i].toUpperCase()) == "TRUE");
        }
        this.updateShape_();
    },

    updateShape_: function () {
        for (let i = 0; i < this.inputs_.length; i++) {
            if ((!this.inputs_[i]) && (this.getInput(BORDER_FIELDS[i].toUpperCase()))) this.removeInput(BORDER_FIELDS[i].toUpperCase());
        }
        for (let i = 0; i < this.inputs_.length; i++) {
            if ((this.inputs_[i]) && (!(this.getInput(BORDER_FIELDS[i].toUpperCase())))) {
                BaseBlockly.Msg[BORDER_FIELDS[i]] = names[i];
                this.appendValueInput(BORDER_FIELDS[i].toUpperCase())
                    .setCheck(BORDER_TYPES[i])
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(names[i]);
            }
        }
    }

};

Blockly.JavaScript[blockName] = function (block) {
const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_NONE);  const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_NONE);
  const url = Blockly.JavaScript.valueToCode(block, "URL", Blockly.JavaScript.ORDER_NONE);
  
var code = 'webhook.edit({'
  
    if(name) {
      code += `name: ${name},`
    }
  if(url) {
    code += ` avatar: ${url},`
  }
  if(channel){
code += `channel: ${channel}.id`
  }
  var finalcode = `${code}}); \n`
    return finalcode;
};

registerRestrictions(blockName, [
    {
        type: "hasparent",
        message: "RES_CREATE_WEBHOOK_PARENT",
        types: [
            "s4d_create_webhook_then",
            "jose_jg_create_webhook_in_channel_with_name_and_profile_picture_url_with_reason_then_do"
        ]
    }
]);
