// Note: These are the rules that formats use
// The list of formats is stored in config/formats.js

'use strict';

/**@type {{[k: string]: FormatsData}} */
let BattleFormats = {
extremespeedclause: {
		effectType: 'ValidatorRule',
		name: 'Extreme Speed Clause',
		desc: "Extreme Speed Clause: Only one Extreme Speed user per team.",
		banlist: ['Extreme Speed > 1'],
		onStart: function () {
			this.add('rule', 'Extreme Speed Clause: Only one Extreme Speed user per team.');
		},
	},
  ignoreillegalmoves: {
		effectType: 'ValidatorRule',
		name: 'Ignore Illegal Moves',
		desc: "Allows Pok&eacute;mon to use any move.",
		checkLearnset: function (move, template, lsetData, set) {
				return null;
		},
	},
	ateclause: {
        effectType: 'ValidatorRule',
        name: '-ate Clause',
        banlist: ['Aerilate + Pixilate + Refrigerate + Hydrate + Absolute Zero + Pixie Grace + Optimize + Misty Supercharge + Enchanted + Move Madness + Fire-B-Gone + Meteor Shower + Overloaded Helm + Christmas Parade + Itemize > 1'],
        onStart: function () {
            this.add('rule', '-ate Clause: Limit one of Ate user');
        },
    },
 };

exports.BattleFormats = BattleFormats;
