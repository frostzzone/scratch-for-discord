/* eslint-disable */
import Blockly from "blockly/core";
import localforage from "localforage";
import pretty from "pretty";
async function start() {
    let blocks = await localforage.getItem("blocks")
    for (var [key, value] of Object.entries(blocks)) {
        for (var [key2, value2] of Object.entries(blocks[key])) {
            let blockName = key2
            let blockData = value2.BlockData
			let blockCode = value2.BlockCode
			let func = new Function('block', "Blockly", pretty(blockCode))
			
            Blockly.Blocks[blockName] = {
                init: function() {
                    this.jsonInit(blockData);
                }
            };
            Blockly.JavaScript[blockName] = function(block) {
                return func(block, Blockly)
            }
        }
    }
}
export default () => {
    start()
}