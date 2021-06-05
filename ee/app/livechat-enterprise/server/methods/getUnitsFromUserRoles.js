import { Meteor } from 'meteor/meteor';

import { hasRole } from '../../../../../app/authorization';
import LivechatUnit from '../../../models/server/models/LivechatUnit';

Meteor.methods({
	'livechat:getUnitsFromUserRoles'() {
		const user = Meteor.user();
		if (!user || hasRole(user._id, ['admin', 'livechat-manager'])) { // TODO DESP: why admins and mannagers cannot see untis?
			return;
		}

		return hasRole(user._id, 'livechat-monitor') && LivechatUnit.findByMonitorId(user._id); // TODO DESP: result type false | []
	},
});
