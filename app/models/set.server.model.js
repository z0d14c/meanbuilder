'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var SetSchema = new Schema({
	name: {
		type: String
	},
  code: {
		type: String
	},
  releaseDate: {
		type: String
	},
  border: {
		type: String
	},
  type: {
		type: String
	},
  block: {
		type: String
	},
  booster: {
		type: Array
	},
  cards: {
		type: Array
	}
});

mongoose.model('Set', SetSchema);