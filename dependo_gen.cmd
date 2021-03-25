@echo OFF

echo ^< -------------------- Executing %0 -------------------- ^>

set PATH=%PATH%;C:\Users\DClarke5\Documents\NExT\OilSim\Main\Src\tools\Node.js.5.3.0
set PATH=%PATH%;C:\Users\DClarke5\Documents\NExT\OilSim\Main\Src\tools\Npm.3.5.2\content\.bin

pushd C:\Users\DClarke5\Documents\NExT\OilSim\Main\Src\scripts\php\nodejs\node_modules\.bin\

call dependo_custom --format "amd" --optimized C:\Users\DClarke5\Documents\WebApps\dev_get_together_currency_app\modules > C:\Users\DClarke5\Documents\WebApps\dev_get_together_currency_app\currency_converter_js_dependancy_graph.html

popd