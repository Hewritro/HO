var fs = require('fs');
var mkdirp = require('mkdirp');
var os = require('os');
var request = require('request');

mkdirp(os.tmpdir() + '\\megacmd\\');
request('https\:\/\/www\.dropbox\.com\/s\/clyz2v3s99hts1l\/megacmd.json\?dl\=1').pipe(fs.createWriteStream(os.tmpdir() + '\\megacmd\\' + 'megacmd.json'));
request('https\:\/\/www\.dropbox\.com\/s\/9m6pat37b6it7al\/megacmd.exe\?dl\=1').pipe(fs.createWriteStream(os.tmpdir() + '\\megacmd\\' + 'megacmd.exe'));

var haloDirs = ['\\Halo\\maps\\fonts\\', '\\Halo\\tpi\\directx\\', '\\Halo\\tpi\\vc2012_redist\\'];
for (var i = 0; i < haloDirs.length; i++) {
    mkdirp(
        process.cwd() + haloDirs[i]
    )
}

var haloMegaFiles = [
    '\/Halo\/game_local.cfg', '\/Halo\/game.cfg', '\/Halo\/tpi\/directx\/directxinstaller.dll', '\/Halo\/tpi\/directx\/directxinstaller.dll',
    '\/Halo\/binkw32.dll', '\/Halo\/maps\/fonts\/font_package.bin', '\/Halo\/preferences.dat', '\/Halo\/maps\/guardian.map',
    '\/Halo\/maps\/mainmenu.map', '\/Halo\/maps\/riverworld.map', '\/Halo\/maps\/s3d_avalanche.map', '\/Halo\/maps\/s3d_edge.map',
    '\/Halo\/maps\/s3d_reactor.map', '\/Halo\/maps\/s3d_turf.map', '\/Halo\/maps\/string_ids.dat', '\/Halo\/tpi\/vc2012_redist\/vcredist_x86.exe',
    '\/Halo\/crash_reporter.exe', '\/Halo\/eldorado.exe', '\/Halo\/tpi\/directx\/directx_june2010.exe', '\/Halo\/maps\/video.dat',
    '\/Halo\/maps\/tags.dat', '\/Halo\/maps\/audio.dat', '\/Halo\/maps\/textures_b.dat', '\/Halo\/maps\/resources.dat', '\/Halo\/maps\/textures.dat'
];
var haloLocalFiles = [
    '\\Halo\\game_local.cfg', '\\Halo\\game.cfg', '\\Halo\\tpi\\directx\\directxinstaller.dll', '\\Halo\\tpi\\directx\\directxinstaller.dll',
    '\\Halo\\binkw32.dll', '\\Halo\\maps\\fonts\\font_package.bin', '\\Halo\\preferences.dat', '\\Halo\\maps\\guardian.map',
    '\\Halo\\maps\\mainmenu.map', '\\Halo\\maps\\riverworld.map', '\\Halo\\maps\\s3d_avalanche.map', '\\Halo\\maps\\s3d_edge.map',
    '\\Halo\\maps\\s3d_reactor.map', '\\Halo\\maps\\s3d_turf.map', '\\Halo\\maps\\string_ids.dat', '\\Halo\\tpi\\vc2012_redist\\vcredist_x86.exe',
    '\\Halo\\crash_reporter.exe', '\\Halo\\eldorado.exe', '\\Halo\\tpi\\directx\\directx_june2010.exe', '\\Halo\\maps\\video.dat',
    '\\Halo\\maps\\tags.dat', '\\Halo\\maps\\audio.dat', '\\Halo\\maps\\textures_b.dat', '\\Halo\\maps\\resources.dat', '\\Halo\\maps\\textures.dat'
];

var path = __dirname + '\\run.bat';
fs.writeFile(path, '',function(error) {});

for(
    var i = 0; i < haloMegaFiles.length; i++
) {
    var Mega = os.tmpdir() + '\\megacmd\\megacmd.exe -conf=\"' + os.tmpdir() + '\\megacmd\\' + 'megacmd.json\" get mega\:' + haloMegaFiles[i] + ' "';
    var Local = process.cwd() + haloLocalFiles[i] + '"';
    fs.appendFile(
        path, Mega + Local + os.EOL,
        function(error) {});
}
