Package.describe({
	name: "danimal:dominus-minimap",
	summary: "Minimap package for Dominus.  http://dominusgame.net",
	version: "1.0.0",
	git: "https://github.com/dan335/dominus-minimap.git"
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR-CORE@0.9.0-rc10')
	api.use(['templating', 'deps'], 'client')
	api.export('Minimap', 'server')
	api.addFiles('server/minimap.js', 'server')
	api.addFiles('client/startup.js', 'client')
	api.addFiles('client/minimap.css', 'client')
	api.addFiles('client/minimap.html', 'client')
	api.addFiles('client/minimap.js', 'client')
});
