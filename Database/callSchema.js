const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
	// UUID of the current call
	_id: {
		type: String,
		required: true,
	},
	// To the person who answered
	to: new mongoose.Schema({
		channelID: {
			type: String,
			required: true,
		},
		number: {
			type: String,
			required: true,
		},
	}, { usePushEach: true }),
	// From the number who called
	from: new mongoose.Schema({
		channelID: {
			type: String,
			required: true,
		},
		number: {
			type: String,
			required: true,
		},
	}, { usePushEach: true }),
	// Start time
	time: {
		type: Date,
		default: Date.now,
	},
	// Call is active
	status: {
		type: Boolean,
		default: true,
	},
	pickedUp: {
		type: Boolean,
		default: false,
	},
	// 5-min Reminder check
	lastReminder: {
		type: Number,
		default: Date.now()
	},
	messages: [new mongoose.Schema({
		umessage: String,
		bmessage: String,
		creator: String,
		time: Number
	}, { usePushEach: true })],
}, { usePushEach: true });
