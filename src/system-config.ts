/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
	'angular2-cookie': 'vendor/angular2-cookie',
	'moment': 'vendor/moment/moment.js',
	'ng2-file-upload': 'vendor/ng2-file-upload',
	'ng2-bootstrap': 'vendor/ng2-bootstrap',
	'ng2-dnd': 'vendor/ng2-dnd',
	'primeng': 'vendor/primeng',
	'notifications': 'vendor/angular2-notifications'
};

/** User packages configuration. */
const packages: any = {
	'angular2-cookie': { main: 'core.js',  defaultExtension: 'js' },
	'ng2-bootstrap': { format: 'cjs', defaultExtension: 'js', main: 'ng2-bootstrap.js' },
	'ng2-dnd': { defaultExtension: 'js' },
	'ng2-file-upload': { main: 'ng2-file-upload.js', defaultExtension: 'js' },
	'primeng': { defaultExtension: 'js' },
	'notifications': { main: 'components.js', defaultExtension: 'js' }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
	// Angular specific barrels.
	'@angular/core',
	'@angular/common',
	'@angular/compiler',
	'@angular/forms',
	'@angular/http',
	'@angular/router',
	'@angular/platform-browser',
	'@angular/platform-browser-dynamic',

	// Thirdparty barrels.
	'rxjs',

	// App specific barrels.
	'app',
	'app/shared',
	'app/components/startmodal',
	'app/test',
	'app/components/test',
	'app/components/studyconfig',
	'app/studylist',
	'app/task/task-list',
	'app/task/task-details',
	'app/study/config/stageconfig',
	'app/login',
	'app/signup',
	'app/field',
	'app/field/fields',
	'app/field/fields/string',
	'app/studyconfig-menu/stageconfig/review-strategy',
	'app/studyconfig-menu/stageconfig',
	'app/studyconfig-menu/studyconfig',
	'app/studyconfig-menu',
	'app/page-not-found',
	'app/shared/navbar',
	'app/index',
	'app/home',
	'app/shared/navbar/usernav',
	'app/shared/services',
	'app/services',
	'app/model',
	'app/task',
	'app/studyconfig-menu/studyconfig/studysources',
	'app/studyconfig-menu/datafieldeditor',
	/** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
	cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
	map: {
		'@angular': 'vendor/@angular',
		'rxjs': 'vendor/rxjs',
		'main': 'main.js',
	},
	packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
