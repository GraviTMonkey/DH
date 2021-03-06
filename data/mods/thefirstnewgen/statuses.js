'use strict';

exports.BattleStatuses = {
	    infected: { /* Get 1/2 X SpA working */
		              effectType: 'Status',
                  onStart: function (target, source, sourceEffect) {
                     if (sourceEffect && sourceEffect.effectType === 'Ability') {
                      this.add('-status', target, 'infected', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
                    } else {
                      this.add('-status', target, 'infected');
                    }
                  },
                  onResidualOrder: 9,
                  onResidual: function (pokemon) {
                    this.damage(pokemon.maxhp / 16);
                  },
			 onModifySpe: function (spa, pokemon) {
				return this.chainModify(0.5);
						 },
              },
       acidrain: {
		effectType: 'Weather',
		duration: 5,
		durationCallback: function (source, effect) {
			if (source && source.hasItem('necroticrock')) {
				return 8;
			}
			return 5;
		},
		onStart: function (battle, source, effect) {
			if (effect && effect.effectType === 'Ability') {
				if (this.gen <= 5) this.effectData.duration = 0;
				this.add('-weather', 'AcidRain', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'AcidRain');
			}
		},
		onResidualOrder: 1,
		onResidual: function () {
			this.add('-weather', 'AcidRain', '[upkeep]');
			if (this.field.isWeather('acidrain')) this.eachEvent('Weather');
		},
		onWeather: function (target) {
			this.damage(target.maxhp / 16);
		},
		onEnd: function () {
			this.add('-weather', 'none');
		},
	},
   ragingwinds: {
		effectType: 'Weather',
		duration: 5,
		durationCallback: function (source, effect) {
			if (source && source.hasItem('breezyrock')) {
				return 8;
			}
			return 5;
		},
		onStart: function (battle, source, effect) {
			if (effect && effect.effectType === 'Ability') {
				if (this.gen <= 5) this.effectData.duration = 0;
				this.add('-weather', 'RagingWinds', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'RagingWinds');
			}
		},
		onResidualOrder: 1,
		onResidual: function () {
			this.add('-weather', 'RagingWinds', '[upkeep]');
			if (this.field.isWeather('ragingWinds')) this.eachEvent('Weather');
		},
		onEnd: function () {
			this.add('-weather', 'none');
		},
	},
};
