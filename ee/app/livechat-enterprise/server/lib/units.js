import { Meteor } from 'meteor/meteor';

import LivechatUnit from '../../../models/server/models/LivechatUnit';

export function hasUnits() {
	return LivechatUnit.unfilteredFind({ type: 'u' }).count() > 0;
}

export function getUnitsFromUser() {
	if (!hasUnits()) { // TODO DESP: no need to create a function to do that.
		return;
	}

	// TODO DESP: this method thrust that you have a Meteor.user context, no way to know that right here.
	// TODO remove this Meteor.call as this is used undirectly by models
	return Meteor.call('livechat:getUnitsFromUserRoles');
}
