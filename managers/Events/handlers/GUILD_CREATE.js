const Guild = require("../../../structures/Guild");
module.exports = class extends (require("../../../structures/Event")) {
	constructor(manager) {
		super(manager);
	}
	
	async run(data) {
		this.manager.client.guilds.set(data.id, new Guild(this.manager.client, data));
		if (this.manager.client.initialGuilds.indexOf(data.id) === -1) {
			this.manager.client.emit("guildCreate", this.manager.client.guilds[data.id]);
		}
	}
};