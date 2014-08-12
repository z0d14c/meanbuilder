'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var CardSetSchema = new Schema({
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
},
  {collection: 'mtgData'});

mongoose.model('CardSet', CardSetSchema);