(function (global) {

    // Where to look for packages
    var map = {
        "app": "src",
        "@angular": "node_modules/@angular",
        "rxjs": "node_modules/rxjs"
    };

    // What to do when no filename and/or no extension exists
    var packages = {
        "app": { main: "main.js", defaultExtension: "js" },
        "rxjs": { main: "Rx.js", defaultExtension: "js" }
    };

    // Angular2 package names, as they are in node_modules/@angular/ directory
    var ngPackageNames = [
        "common",
        "compiler",
        "core",
        "platform-browser",
        "platform-browser-dynamic"
    ];

    // Mapping angular2 packages
    function packageUmd(packageName) {
        packages["@angular/" + packageName] = { main: "/bundles/" + packageName + ".umd.js", defaultExtension: "js" };
    };

    // Set UMD packages (for this sample project, in order to be safe with other environments like Karma, we should use the index as well)
    ngPackageNames.forEach(packageUmd);
    var config = {
        map: map,
        packages: packages
    };

    System.config(config);
})(this);