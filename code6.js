gdjs.sc_95lunchCode = {};
gdjs.sc_95lunchCode.GDPhase01Objects1= [];
gdjs.sc_95lunchCode.GDPhase01Objects2= [];
gdjs.sc_95lunchCode.GDPhase01Objects3= [];
gdjs.sc_95lunchCode.GDPhase01Objects4= [];
gdjs.sc_95lunchCode.GDPhase02Objects1= [];
gdjs.sc_95lunchCode.GDPhase02Objects2= [];
gdjs.sc_95lunchCode.GDPhase02Objects3= [];
gdjs.sc_95lunchCode.GDPhase02Objects4= [];
gdjs.sc_95lunchCode.GDPhase03Objects1= [];
gdjs.sc_95lunchCode.GDPhase03Objects2= [];
gdjs.sc_95lunchCode.GDPhase03Objects3= [];
gdjs.sc_95lunchCode.GDPhase03Objects4= [];
gdjs.sc_95lunchCode.GDPhase04Objects1= [];
gdjs.sc_95lunchCode.GDPhase04Objects2= [];
gdjs.sc_95lunchCode.GDPhase04Objects3= [];
gdjs.sc_95lunchCode.GDPhase04Objects4= [];
gdjs.sc_95lunchCode.GDPhase05Objects1= [];
gdjs.sc_95lunchCode.GDPhase05Objects2= [];
gdjs.sc_95lunchCode.GDPhase05Objects3= [];
gdjs.sc_95lunchCode.GDPhase05Objects4= [];
gdjs.sc_95lunchCode.GDPhase06Objects1= [];
gdjs.sc_95lunchCode.GDPhase06Objects2= [];
gdjs.sc_95lunchCode.GDPhase06Objects3= [];
gdjs.sc_95lunchCode.GDPhase06Objects4= [];
gdjs.sc_95lunchCode.GDPhase07Objects1= [];
gdjs.sc_95lunchCode.GDPhase07Objects2= [];
gdjs.sc_95lunchCode.GDPhase07Objects3= [];
gdjs.sc_95lunchCode.GDPhase07Objects4= [];
gdjs.sc_95lunchCode.GDPhase08Objects1= [];
gdjs.sc_95lunchCode.GDPhase08Objects2= [];
gdjs.sc_95lunchCode.GDPhase08Objects3= [];
gdjs.sc_95lunchCode.GDPhase08Objects4= [];
gdjs.sc_95lunchCode.GDText_95PCObjects1= [];
gdjs.sc_95lunchCode.GDText_95PCObjects2= [];
gdjs.sc_95lunchCode.GDText_95PCObjects3= [];
gdjs.sc_95lunchCode.GDText_95PCObjects4= [];
gdjs.sc_95lunchCode.GDText_95MobileObjects1= [];
gdjs.sc_95lunchCode.GDText_95MobileObjects2= [];
gdjs.sc_95lunchCode.GDText_95MobileObjects3= [];
gdjs.sc_95lunchCode.GDText_95MobileObjects4= [];
gdjs.sc_95lunchCode.GDSkipObjects1= [];
gdjs.sc_95lunchCode.GDSkipObjects2= [];
gdjs.sc_95lunchCode.GDSkipObjects3= [];
gdjs.sc_95lunchCode.GDSkipObjects4= [];
gdjs.sc_95lunchCode.GDskip_95pcObjects1= [];
gdjs.sc_95lunchCode.GDskip_95pcObjects2= [];
gdjs.sc_95lunchCode.GDskip_95pcObjects3= [];
gdjs.sc_95lunchCode.GDskip_95pcObjects4= [];

gdjs.sc_95lunchCode.conditionTrue_0 = {val:false};
gdjs.sc_95lunchCode.condition0IsTrue_0 = {val:false};
gdjs.sc_95lunchCode.condition1IsTrue_0 = {val:false};
gdjs.sc_95lunchCode.condition2IsTrue_0 = {val:false};
gdjs.sc_95lunchCode.condition3IsTrue_0 = {val:false};
gdjs.sc_95lunchCode.condition4IsTrue_0 = {val:false};
gdjs.sc_95lunchCode.condition5IsTrue_0 = {val:false};
gdjs.sc_95lunchCode.condition6IsTrue_0 = {val:false};
gdjs.sc_95lunchCode.condition7IsTrue_0 = {val:false};
gdjs.sc_95lunchCode.condition8IsTrue_0 = {val:false};
gdjs.sc_95lunchCode.conditionTrue_1 = {val:false};
gdjs.sc_95lunchCode.condition0IsTrue_1 = {val:false};
gdjs.sc_95lunchCode.condition1IsTrue_1 = {val:false};
gdjs.sc_95lunchCode.condition2IsTrue_1 = {val:false};
gdjs.sc_95lunchCode.condition3IsTrue_1 = {val:false};
gdjs.sc_95lunchCode.condition4IsTrue_1 = {val:false};
gdjs.sc_95lunchCode.condition5IsTrue_1 = {val:false};
gdjs.sc_95lunchCode.condition6IsTrue_1 = {val:false};
gdjs.sc_95lunchCode.condition7IsTrue_1 = {val:false};
gdjs.sc_95lunchCode.condition8IsTrue_1 = {val:false};


gdjs.sc_95lunchCode.eventsList0 = function(runtimeScene) {

{


gdjs.sc_95lunchCode.condition0IsTrue_0.val = false;
{
gdjs.sc_95lunchCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.sc_95lunchCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Phase01"), gdjs.sc_95lunchCode.GDPhase01Objects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Phase02");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Phase03");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Phase04");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Phase05");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Phase06");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Phase07");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Phase08");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Text_Mobile");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Text_PC");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Skip_mobile");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Skip_PC");
}{for(var i = 0, len = gdjs.sc_95lunchCode.GDPhase01Objects1.length ;i < len;++i) {
    gdjs.sc_95lunchCode.GDPhase01Objects1[i].play();
}
}}

}


};gdjs.sc_95lunchCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Phase01"), gdjs.sc_95lunchCode.GDPhase01Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase02"), gdjs.sc_95lunchCode.GDPhase02Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase03"), gdjs.sc_95lunchCode.GDPhase03Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase04"), gdjs.sc_95lunchCode.GDPhase04Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase05"), gdjs.sc_95lunchCode.GDPhase05Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase06"), gdjs.sc_95lunchCode.GDPhase06Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase07"), gdjs.sc_95lunchCode.GDPhase07Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase08"), gdjs.sc_95lunchCode.GDPhase08Objects2);

gdjs.sc_95lunchCode.condition0IsTrue_0.val = false;
{
{gdjs.sc_95lunchCode.conditionTrue_1 = gdjs.sc_95lunchCode.condition0IsTrue_0;
gdjs.sc_95lunchCode.condition0IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition2IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition3IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition4IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition5IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition6IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition7IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase01Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase01Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition0IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase01Objects2[k] = gdjs.sc_95lunchCode.GDPhase01Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase01Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase02Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase02Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition1IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase02Objects2[k] = gdjs.sc_95lunchCode.GDPhase02Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase02Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase03Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase03Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition2IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase03Objects2[k] = gdjs.sc_95lunchCode.GDPhase03Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase03Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase04Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase04Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition3IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase04Objects2[k] = gdjs.sc_95lunchCode.GDPhase04Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase04Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition3IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase05Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase05Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition4IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase05Objects2[k] = gdjs.sc_95lunchCode.GDPhase05Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase05Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition4IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase06Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase06Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition5IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase06Objects2[k] = gdjs.sc_95lunchCode.GDPhase06Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase06Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition5IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase07Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase07Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition6IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase07Objects2[k] = gdjs.sc_95lunchCode.GDPhase07Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase07Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition6IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase08Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase08Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition7IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase08Objects2[k] = gdjs.sc_95lunchCode.GDPhase08Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase08Objects2.length = k;}}
}
}
}
}
}
}
gdjs.sc_95lunchCode.conditionTrue_1.val = true && gdjs.sc_95lunchCode.condition0IsTrue_1.val && gdjs.sc_95lunchCode.condition1IsTrue_1.val && gdjs.sc_95lunchCode.condition2IsTrue_1.val && gdjs.sc_95lunchCode.condition3IsTrue_1.val && gdjs.sc_95lunchCode.condition4IsTrue_1.val && gdjs.sc_95lunchCode.condition5IsTrue_1.val && gdjs.sc_95lunchCode.condition6IsTrue_1.val && gdjs.sc_95lunchCode.condition7IsTrue_1.val;
}
}if (gdjs.sc_95lunchCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Text_PC");
}}

}


};gdjs.sc_95lunchCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Phase01"), gdjs.sc_95lunchCode.GDPhase01Objects3);
gdjs.copyArray(runtimeScene.getObjects("Phase02"), gdjs.sc_95lunchCode.GDPhase02Objects3);

gdjs.sc_95lunchCode.condition0IsTrue_0.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_0.val = false;
{
gdjs.sc_95lunchCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.sc_95lunchCode.condition0IsTrue_0.val ) {
{
{gdjs.sc_95lunchCode.conditionTrue_1 = gdjs.sc_95lunchCode.condition1IsTrue_0;
gdjs.sc_95lunchCode.condition0IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase01Objects3.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase01Objects3[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition0IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase01Objects3[k] = gdjs.sc_95lunchCode.GDPhase01Objects3[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase01Objects3.length = k;}if ( gdjs.sc_95lunchCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase02Objects3.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase02Objects3[i].isEnded()) ) {
        gdjs.sc_95lunchCode.condition1IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase02Objects3[k] = gdjs.sc_95lunchCode.GDPhase02Objects3[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase02Objects3.length = k;}}
gdjs.sc_95lunchCode.conditionTrue_1.val = true && gdjs.sc_95lunchCode.condition0IsTrue_1.val && gdjs.sc_95lunchCode.condition1IsTrue_1.val;
}
}}
if (gdjs.sc_95lunchCode.condition1IsTrue_0.val) {
/* Reuse gdjs.sc_95lunchCode.GDPhase02Objects3 */
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Phase01");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Text_PC");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Phase02");
}{for(var i = 0, len = gdjs.sc_95lunchCode.GDPhase02Objects3.length ;i < len;++i) {
    gdjs.sc_95lunchCode.GDPhase02Objects3[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Phase01"), gdjs.sc_95lunchCode.GDPhase01Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase02"), gdjs.sc_95lunchCode.GDPhase02Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase03"), gdjs.sc_95lunchCode.GDPhase03Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase04"), gdjs.sc_95lunchCode.GDPhase04Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase05"), gdjs.sc_95lunchCode.GDPhase05Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase06"), gdjs.sc_95lunchCode.GDPhase06Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase07"), gdjs.sc_95lunchCode.GDPhase07Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase08"), gdjs.sc_95lunchCode.GDPhase08Objects2);

gdjs.sc_95lunchCode.condition0IsTrue_0.val = false;
{
{gdjs.sc_95lunchCode.conditionTrue_1 = gdjs.sc_95lunchCode.condition0IsTrue_0;
gdjs.sc_95lunchCode.condition0IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition2IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition3IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition4IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition5IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition6IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition7IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase01Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase01Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition0IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase01Objects2[k] = gdjs.sc_95lunchCode.GDPhase01Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase01Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase02Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase02Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition1IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase02Objects2[k] = gdjs.sc_95lunchCode.GDPhase02Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase02Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase03Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase03Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition2IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase03Objects2[k] = gdjs.sc_95lunchCode.GDPhase03Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase03Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase04Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase04Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition3IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase04Objects2[k] = gdjs.sc_95lunchCode.GDPhase04Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase04Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition3IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase05Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase05Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition4IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase05Objects2[k] = gdjs.sc_95lunchCode.GDPhase05Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase05Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition4IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase06Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase06Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition5IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase06Objects2[k] = gdjs.sc_95lunchCode.GDPhase06Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase06Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition5IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase07Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase07Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition6IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase07Objects2[k] = gdjs.sc_95lunchCode.GDPhase07Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase07Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition6IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase08Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase08Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition7IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase08Objects2[k] = gdjs.sc_95lunchCode.GDPhase08Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase08Objects2.length = k;}}
}
}
}
}
}
}
gdjs.sc_95lunchCode.conditionTrue_1.val = true && gdjs.sc_95lunchCode.condition0IsTrue_1.val && gdjs.sc_95lunchCode.condition1IsTrue_1.val && gdjs.sc_95lunchCode.condition2IsTrue_1.val && gdjs.sc_95lunchCode.condition3IsTrue_1.val && gdjs.sc_95lunchCode.condition4IsTrue_1.val && gdjs.sc_95lunchCode.condition5IsTrue_1.val && gdjs.sc_95lunchCode.condition6IsTrue_1.val && gdjs.sc_95lunchCode.condition7IsTrue_1.val;
}
}if (gdjs.sc_95lunchCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Text_PC");
}}

}


};gdjs.sc_95lunchCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Phase02"), gdjs.sc_95lunchCode.GDPhase02Objects3);
gdjs.copyArray(runtimeScene.getObjects("Phase03"), gdjs.sc_95lunchCode.GDPhase03Objects3);

gdjs.sc_95lunchCode.condition0IsTrue_0.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_0.val = false;
{
gdjs.sc_95lunchCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.sc_95lunchCode.condition0IsTrue_0.val ) {
{
{gdjs.sc_95lunchCode.conditionTrue_1 = gdjs.sc_95lunchCode.condition1IsTrue_0;
gdjs.sc_95lunchCode.condition0IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase02Objects3.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase02Objects3[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition0IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase02Objects3[k] = gdjs.sc_95lunchCode.GDPhase02Objects3[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase02Objects3.length = k;}if ( gdjs.sc_95lunchCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase03Objects3.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase03Objects3[i].isEnded()) ) {
        gdjs.sc_95lunchCode.condition1IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase03Objects3[k] = gdjs.sc_95lunchCode.GDPhase03Objects3[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase03Objects3.length = k;}}
gdjs.sc_95lunchCode.conditionTrue_1.val = true && gdjs.sc_95lunchCode.condition0IsTrue_1.val && gdjs.sc_95lunchCode.condition1IsTrue_1.val;
}
}}
if (gdjs.sc_95lunchCode.condition1IsTrue_0.val) {
/* Reuse gdjs.sc_95lunchCode.GDPhase03Objects3 */
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Phase02");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Text_PC");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Phase03");
}{for(var i = 0, len = gdjs.sc_95lunchCode.GDPhase03Objects3.length ;i < len;++i) {
    gdjs.sc_95lunchCode.GDPhase03Objects3[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Phase01"), gdjs.sc_95lunchCode.GDPhase01Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase02"), gdjs.sc_95lunchCode.GDPhase02Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase03"), gdjs.sc_95lunchCode.GDPhase03Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase04"), gdjs.sc_95lunchCode.GDPhase04Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase05"), gdjs.sc_95lunchCode.GDPhase05Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase06"), gdjs.sc_95lunchCode.GDPhase06Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase07"), gdjs.sc_95lunchCode.GDPhase07Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase08"), gdjs.sc_95lunchCode.GDPhase08Objects2);

gdjs.sc_95lunchCode.condition0IsTrue_0.val = false;
{
{gdjs.sc_95lunchCode.conditionTrue_1 = gdjs.sc_95lunchCode.condition0IsTrue_0;
gdjs.sc_95lunchCode.condition0IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition2IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition3IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition4IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition5IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition6IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition7IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase01Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase01Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition0IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase01Objects2[k] = gdjs.sc_95lunchCode.GDPhase01Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase01Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase02Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase02Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition1IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase02Objects2[k] = gdjs.sc_95lunchCode.GDPhase02Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase02Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase03Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase03Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition2IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase03Objects2[k] = gdjs.sc_95lunchCode.GDPhase03Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase03Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase04Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase04Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition3IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase04Objects2[k] = gdjs.sc_95lunchCode.GDPhase04Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase04Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition3IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase05Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase05Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition4IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase05Objects2[k] = gdjs.sc_95lunchCode.GDPhase05Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase05Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition4IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase06Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase06Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition5IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase06Objects2[k] = gdjs.sc_95lunchCode.GDPhase06Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase06Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition5IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase07Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase07Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition6IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase07Objects2[k] = gdjs.sc_95lunchCode.GDPhase07Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase07Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition6IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase08Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase08Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition7IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase08Objects2[k] = gdjs.sc_95lunchCode.GDPhase08Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase08Objects2.length = k;}}
}
}
}
}
}
}
gdjs.sc_95lunchCode.conditionTrue_1.val = true && gdjs.sc_95lunchCode.condition0IsTrue_1.val && gdjs.sc_95lunchCode.condition1IsTrue_1.val && gdjs.sc_95lunchCode.condition2IsTrue_1.val && gdjs.sc_95lunchCode.condition3IsTrue_1.val && gdjs.sc_95lunchCode.condition4IsTrue_1.val && gdjs.sc_95lunchCode.condition5IsTrue_1.val && gdjs.sc_95lunchCode.condition6IsTrue_1.val && gdjs.sc_95lunchCode.condition7IsTrue_1.val;
}
}if (gdjs.sc_95lunchCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Text_PC");
}}

}


};gdjs.sc_95lunchCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Phase03"), gdjs.sc_95lunchCode.GDPhase03Objects3);
gdjs.copyArray(runtimeScene.getObjects("Phase04"), gdjs.sc_95lunchCode.GDPhase04Objects3);

gdjs.sc_95lunchCode.condition0IsTrue_0.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_0.val = false;
{
gdjs.sc_95lunchCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.sc_95lunchCode.condition0IsTrue_0.val ) {
{
{gdjs.sc_95lunchCode.conditionTrue_1 = gdjs.sc_95lunchCode.condition1IsTrue_0;
gdjs.sc_95lunchCode.condition0IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase03Objects3.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase03Objects3[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition0IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase03Objects3[k] = gdjs.sc_95lunchCode.GDPhase03Objects3[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase03Objects3.length = k;}if ( gdjs.sc_95lunchCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase04Objects3.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase04Objects3[i].isEnded()) ) {
        gdjs.sc_95lunchCode.condition1IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase04Objects3[k] = gdjs.sc_95lunchCode.GDPhase04Objects3[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase04Objects3.length = k;}}
gdjs.sc_95lunchCode.conditionTrue_1.val = true && gdjs.sc_95lunchCode.condition0IsTrue_1.val && gdjs.sc_95lunchCode.condition1IsTrue_1.val;
}
}}
if (gdjs.sc_95lunchCode.condition1IsTrue_0.val) {
/* Reuse gdjs.sc_95lunchCode.GDPhase04Objects3 */
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Phase03");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Text_PC");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Phase04");
}{for(var i = 0, len = gdjs.sc_95lunchCode.GDPhase04Objects3.length ;i < len;++i) {
    gdjs.sc_95lunchCode.GDPhase04Objects3[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Phase01"), gdjs.sc_95lunchCode.GDPhase01Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase02"), gdjs.sc_95lunchCode.GDPhase02Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase03"), gdjs.sc_95lunchCode.GDPhase03Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase04"), gdjs.sc_95lunchCode.GDPhase04Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase05"), gdjs.sc_95lunchCode.GDPhase05Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase06"), gdjs.sc_95lunchCode.GDPhase06Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase07"), gdjs.sc_95lunchCode.GDPhase07Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase08"), gdjs.sc_95lunchCode.GDPhase08Objects2);

gdjs.sc_95lunchCode.condition0IsTrue_0.val = false;
{
{gdjs.sc_95lunchCode.conditionTrue_1 = gdjs.sc_95lunchCode.condition0IsTrue_0;
gdjs.sc_95lunchCode.condition0IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition2IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition3IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition4IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition5IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition6IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition7IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase01Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase01Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition0IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase01Objects2[k] = gdjs.sc_95lunchCode.GDPhase01Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase01Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase02Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase02Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition1IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase02Objects2[k] = gdjs.sc_95lunchCode.GDPhase02Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase02Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase03Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase03Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition2IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase03Objects2[k] = gdjs.sc_95lunchCode.GDPhase03Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase03Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase04Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase04Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition3IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase04Objects2[k] = gdjs.sc_95lunchCode.GDPhase04Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase04Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition3IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase05Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase05Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition4IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase05Objects2[k] = gdjs.sc_95lunchCode.GDPhase05Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase05Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition4IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase06Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase06Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition5IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase06Objects2[k] = gdjs.sc_95lunchCode.GDPhase06Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase06Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition5IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase07Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase07Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition6IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase07Objects2[k] = gdjs.sc_95lunchCode.GDPhase07Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase07Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition6IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase08Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase08Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition7IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase08Objects2[k] = gdjs.sc_95lunchCode.GDPhase08Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase08Objects2.length = k;}}
}
}
}
}
}
}
gdjs.sc_95lunchCode.conditionTrue_1.val = true && gdjs.sc_95lunchCode.condition0IsTrue_1.val && gdjs.sc_95lunchCode.condition1IsTrue_1.val && gdjs.sc_95lunchCode.condition2IsTrue_1.val && gdjs.sc_95lunchCode.condition3IsTrue_1.val && gdjs.sc_95lunchCode.condition4IsTrue_1.val && gdjs.sc_95lunchCode.condition5IsTrue_1.val && gdjs.sc_95lunchCode.condition6IsTrue_1.val && gdjs.sc_95lunchCode.condition7IsTrue_1.val;
}
}if (gdjs.sc_95lunchCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Text_PC");
}}

}


};gdjs.sc_95lunchCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Phase04"), gdjs.sc_95lunchCode.GDPhase04Objects3);
gdjs.copyArray(runtimeScene.getObjects("Phase05"), gdjs.sc_95lunchCode.GDPhase05Objects3);

gdjs.sc_95lunchCode.condition0IsTrue_0.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_0.val = false;
{
gdjs.sc_95lunchCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.sc_95lunchCode.condition0IsTrue_0.val ) {
{
{gdjs.sc_95lunchCode.conditionTrue_1 = gdjs.sc_95lunchCode.condition1IsTrue_0;
gdjs.sc_95lunchCode.condition0IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase04Objects3.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase04Objects3[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition0IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase04Objects3[k] = gdjs.sc_95lunchCode.GDPhase04Objects3[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase04Objects3.length = k;}if ( gdjs.sc_95lunchCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase05Objects3.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase05Objects3[i].isEnded()) ) {
        gdjs.sc_95lunchCode.condition1IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase05Objects3[k] = gdjs.sc_95lunchCode.GDPhase05Objects3[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase05Objects3.length = k;}}
gdjs.sc_95lunchCode.conditionTrue_1.val = true && gdjs.sc_95lunchCode.condition0IsTrue_1.val && gdjs.sc_95lunchCode.condition1IsTrue_1.val;
}
}}
if (gdjs.sc_95lunchCode.condition1IsTrue_0.val) {
/* Reuse gdjs.sc_95lunchCode.GDPhase05Objects3 */
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Phase04");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Text_PC");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Phase05");
}{for(var i = 0, len = gdjs.sc_95lunchCode.GDPhase05Objects3.length ;i < len;++i) {
    gdjs.sc_95lunchCode.GDPhase05Objects3[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Phase01"), gdjs.sc_95lunchCode.GDPhase01Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase02"), gdjs.sc_95lunchCode.GDPhase02Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase03"), gdjs.sc_95lunchCode.GDPhase03Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase04"), gdjs.sc_95lunchCode.GDPhase04Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase05"), gdjs.sc_95lunchCode.GDPhase05Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase06"), gdjs.sc_95lunchCode.GDPhase06Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase07"), gdjs.sc_95lunchCode.GDPhase07Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase08"), gdjs.sc_95lunchCode.GDPhase08Objects2);

gdjs.sc_95lunchCode.condition0IsTrue_0.val = false;
{
{gdjs.sc_95lunchCode.conditionTrue_1 = gdjs.sc_95lunchCode.condition0IsTrue_0;
gdjs.sc_95lunchCode.condition0IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition2IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition3IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition4IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition5IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition6IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition7IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase01Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase01Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition0IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase01Objects2[k] = gdjs.sc_95lunchCode.GDPhase01Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase01Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase02Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase02Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition1IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase02Objects2[k] = gdjs.sc_95lunchCode.GDPhase02Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase02Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase03Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase03Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition2IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase03Objects2[k] = gdjs.sc_95lunchCode.GDPhase03Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase03Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase04Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase04Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition3IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase04Objects2[k] = gdjs.sc_95lunchCode.GDPhase04Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase04Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition3IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase05Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase05Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition4IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase05Objects2[k] = gdjs.sc_95lunchCode.GDPhase05Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase05Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition4IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase06Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase06Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition5IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase06Objects2[k] = gdjs.sc_95lunchCode.GDPhase06Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase06Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition5IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase07Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase07Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition6IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase07Objects2[k] = gdjs.sc_95lunchCode.GDPhase07Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase07Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition6IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase08Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase08Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition7IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase08Objects2[k] = gdjs.sc_95lunchCode.GDPhase08Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase08Objects2.length = k;}}
}
}
}
}
}
}
gdjs.sc_95lunchCode.conditionTrue_1.val = true && gdjs.sc_95lunchCode.condition0IsTrue_1.val && gdjs.sc_95lunchCode.condition1IsTrue_1.val && gdjs.sc_95lunchCode.condition2IsTrue_1.val && gdjs.sc_95lunchCode.condition3IsTrue_1.val && gdjs.sc_95lunchCode.condition4IsTrue_1.val && gdjs.sc_95lunchCode.condition5IsTrue_1.val && gdjs.sc_95lunchCode.condition6IsTrue_1.val && gdjs.sc_95lunchCode.condition7IsTrue_1.val;
}
}if (gdjs.sc_95lunchCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Text_PC");
}}

}


};gdjs.sc_95lunchCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Phase05"), gdjs.sc_95lunchCode.GDPhase05Objects3);
gdjs.copyArray(runtimeScene.getObjects("Phase06"), gdjs.sc_95lunchCode.GDPhase06Objects3);

gdjs.sc_95lunchCode.condition0IsTrue_0.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_0.val = false;
{
gdjs.sc_95lunchCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.sc_95lunchCode.condition0IsTrue_0.val ) {
{
{gdjs.sc_95lunchCode.conditionTrue_1 = gdjs.sc_95lunchCode.condition1IsTrue_0;
gdjs.sc_95lunchCode.condition0IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase05Objects3.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase05Objects3[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition0IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase05Objects3[k] = gdjs.sc_95lunchCode.GDPhase05Objects3[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase05Objects3.length = k;}if ( gdjs.sc_95lunchCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase06Objects3.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase06Objects3[i].isEnded()) ) {
        gdjs.sc_95lunchCode.condition1IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase06Objects3[k] = gdjs.sc_95lunchCode.GDPhase06Objects3[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase06Objects3.length = k;}}
gdjs.sc_95lunchCode.conditionTrue_1.val = true && gdjs.sc_95lunchCode.condition0IsTrue_1.val && gdjs.sc_95lunchCode.condition1IsTrue_1.val;
}
}}
if (gdjs.sc_95lunchCode.condition1IsTrue_0.val) {
/* Reuse gdjs.sc_95lunchCode.GDPhase06Objects3 */
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Phase05");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Text_PC");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Phase06");
}{for(var i = 0, len = gdjs.sc_95lunchCode.GDPhase06Objects3.length ;i < len;++i) {
    gdjs.sc_95lunchCode.GDPhase06Objects3[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Phase01"), gdjs.sc_95lunchCode.GDPhase01Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase02"), gdjs.sc_95lunchCode.GDPhase02Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase03"), gdjs.sc_95lunchCode.GDPhase03Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase04"), gdjs.sc_95lunchCode.GDPhase04Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase05"), gdjs.sc_95lunchCode.GDPhase05Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase06"), gdjs.sc_95lunchCode.GDPhase06Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase07"), gdjs.sc_95lunchCode.GDPhase07Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase08"), gdjs.sc_95lunchCode.GDPhase08Objects2);

gdjs.sc_95lunchCode.condition0IsTrue_0.val = false;
{
{gdjs.sc_95lunchCode.conditionTrue_1 = gdjs.sc_95lunchCode.condition0IsTrue_0;
gdjs.sc_95lunchCode.condition0IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition2IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition3IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition4IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition5IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition6IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition7IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase01Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase01Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition0IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase01Objects2[k] = gdjs.sc_95lunchCode.GDPhase01Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase01Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase02Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase02Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition1IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase02Objects2[k] = gdjs.sc_95lunchCode.GDPhase02Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase02Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase03Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase03Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition2IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase03Objects2[k] = gdjs.sc_95lunchCode.GDPhase03Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase03Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase04Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase04Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition3IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase04Objects2[k] = gdjs.sc_95lunchCode.GDPhase04Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase04Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition3IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase05Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase05Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition4IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase05Objects2[k] = gdjs.sc_95lunchCode.GDPhase05Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase05Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition4IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase06Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase06Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition5IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase06Objects2[k] = gdjs.sc_95lunchCode.GDPhase06Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase06Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition5IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase07Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase07Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition6IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase07Objects2[k] = gdjs.sc_95lunchCode.GDPhase07Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase07Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition6IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase08Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase08Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition7IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase08Objects2[k] = gdjs.sc_95lunchCode.GDPhase08Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase08Objects2.length = k;}}
}
}
}
}
}
}
gdjs.sc_95lunchCode.conditionTrue_1.val = true && gdjs.sc_95lunchCode.condition0IsTrue_1.val && gdjs.sc_95lunchCode.condition1IsTrue_1.val && gdjs.sc_95lunchCode.condition2IsTrue_1.val && gdjs.sc_95lunchCode.condition3IsTrue_1.val && gdjs.sc_95lunchCode.condition4IsTrue_1.val && gdjs.sc_95lunchCode.condition5IsTrue_1.val && gdjs.sc_95lunchCode.condition6IsTrue_1.val && gdjs.sc_95lunchCode.condition7IsTrue_1.val;
}
}if (gdjs.sc_95lunchCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Text_PC");
}}

}


};gdjs.sc_95lunchCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Phase06"), gdjs.sc_95lunchCode.GDPhase06Objects3);
gdjs.copyArray(runtimeScene.getObjects("Phase07"), gdjs.sc_95lunchCode.GDPhase07Objects3);

gdjs.sc_95lunchCode.condition0IsTrue_0.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_0.val = false;
{
gdjs.sc_95lunchCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.sc_95lunchCode.condition0IsTrue_0.val ) {
{
{gdjs.sc_95lunchCode.conditionTrue_1 = gdjs.sc_95lunchCode.condition1IsTrue_0;
gdjs.sc_95lunchCode.condition0IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase06Objects3.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase06Objects3[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition0IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase06Objects3[k] = gdjs.sc_95lunchCode.GDPhase06Objects3[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase06Objects3.length = k;}if ( gdjs.sc_95lunchCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase07Objects3.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase07Objects3[i].isEnded()) ) {
        gdjs.sc_95lunchCode.condition1IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase07Objects3[k] = gdjs.sc_95lunchCode.GDPhase07Objects3[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase07Objects3.length = k;}}
gdjs.sc_95lunchCode.conditionTrue_1.val = true && gdjs.sc_95lunchCode.condition0IsTrue_1.val && gdjs.sc_95lunchCode.condition1IsTrue_1.val;
}
}}
if (gdjs.sc_95lunchCode.condition1IsTrue_0.val) {
/* Reuse gdjs.sc_95lunchCode.GDPhase07Objects3 */
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Phase06");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Text_PC");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Phase07");
}{for(var i = 0, len = gdjs.sc_95lunchCode.GDPhase07Objects3.length ;i < len;++i) {
    gdjs.sc_95lunchCode.GDPhase07Objects3[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Phase01"), gdjs.sc_95lunchCode.GDPhase01Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase02"), gdjs.sc_95lunchCode.GDPhase02Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase03"), gdjs.sc_95lunchCode.GDPhase03Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase04"), gdjs.sc_95lunchCode.GDPhase04Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase05"), gdjs.sc_95lunchCode.GDPhase05Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase06"), gdjs.sc_95lunchCode.GDPhase06Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase07"), gdjs.sc_95lunchCode.GDPhase07Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase08"), gdjs.sc_95lunchCode.GDPhase08Objects2);

gdjs.sc_95lunchCode.condition0IsTrue_0.val = false;
{
{gdjs.sc_95lunchCode.conditionTrue_1 = gdjs.sc_95lunchCode.condition0IsTrue_0;
gdjs.sc_95lunchCode.condition0IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition2IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition3IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition4IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition5IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition6IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition7IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase01Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase01Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition0IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase01Objects2[k] = gdjs.sc_95lunchCode.GDPhase01Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase01Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase02Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase02Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition1IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase02Objects2[k] = gdjs.sc_95lunchCode.GDPhase02Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase02Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition1IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase03Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase03Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition2IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase03Objects2[k] = gdjs.sc_95lunchCode.GDPhase03Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase03Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition2IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase04Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase04Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition3IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase04Objects2[k] = gdjs.sc_95lunchCode.GDPhase04Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase04Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition3IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase05Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase05Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition4IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase05Objects2[k] = gdjs.sc_95lunchCode.GDPhase05Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase05Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition4IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase06Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase06Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition5IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase06Objects2[k] = gdjs.sc_95lunchCode.GDPhase06Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase06Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition5IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase07Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase07Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition6IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase07Objects2[k] = gdjs.sc_95lunchCode.GDPhase07Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase07Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition6IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase08Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase08Objects2[i].isPlayed()) ) {
        gdjs.sc_95lunchCode.condition7IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase08Objects2[k] = gdjs.sc_95lunchCode.GDPhase08Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase08Objects2.length = k;}}
}
}
}
}
}
}
gdjs.sc_95lunchCode.conditionTrue_1.val = true && gdjs.sc_95lunchCode.condition0IsTrue_1.val && gdjs.sc_95lunchCode.condition1IsTrue_1.val && gdjs.sc_95lunchCode.condition2IsTrue_1.val && gdjs.sc_95lunchCode.condition3IsTrue_1.val && gdjs.sc_95lunchCode.condition4IsTrue_1.val && gdjs.sc_95lunchCode.condition5IsTrue_1.val && gdjs.sc_95lunchCode.condition6IsTrue_1.val && gdjs.sc_95lunchCode.condition7IsTrue_1.val;
}
}if (gdjs.sc_95lunchCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Text_PC");
}}

}


};gdjs.sc_95lunchCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Phase07"), gdjs.sc_95lunchCode.GDPhase07Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase08"), gdjs.sc_95lunchCode.GDPhase08Objects2);

gdjs.sc_95lunchCode.condition0IsTrue_0.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_0.val = false;
{
gdjs.sc_95lunchCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.sc_95lunchCode.condition0IsTrue_0.val ) {
{
{gdjs.sc_95lunchCode.conditionTrue_1 = gdjs.sc_95lunchCode.condition1IsTrue_0;
gdjs.sc_95lunchCode.condition0IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase07Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase07Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition0IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase07Objects2[k] = gdjs.sc_95lunchCode.GDPhase07Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase07Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase08Objects2.length;i<l;++i) {
    if ( !(gdjs.sc_95lunchCode.GDPhase08Objects2[i].isEnded()) ) {
        gdjs.sc_95lunchCode.condition1IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase08Objects2[k] = gdjs.sc_95lunchCode.GDPhase08Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase08Objects2.length = k;}}
gdjs.sc_95lunchCode.conditionTrue_1.val = true && gdjs.sc_95lunchCode.condition0IsTrue_1.val && gdjs.sc_95lunchCode.condition1IsTrue_1.val;
}
}}
if (gdjs.sc_95lunchCode.condition1IsTrue_0.val) {
/* Reuse gdjs.sc_95lunchCode.GDPhase08Objects2 */
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Phase07");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Text_PC");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Phase08");
}{for(var i = 0, len = gdjs.sc_95lunchCode.GDPhase08Objects2.length ;i < len;++i) {
    gdjs.sc_95lunchCode.GDPhase08Objects2[i].play();
}
}}

}


};gdjs.sc_95lunchCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Phase07"), gdjs.sc_95lunchCode.GDPhase07Objects2);
gdjs.copyArray(runtimeScene.getObjects("Phase08"), gdjs.sc_95lunchCode.GDPhase08Objects2);

gdjs.sc_95lunchCode.condition0IsTrue_0.val = false;
{
{gdjs.sc_95lunchCode.conditionTrue_1 = gdjs.sc_95lunchCode.condition0IsTrue_0;
gdjs.sc_95lunchCode.condition0IsTrue_1.val = false;
gdjs.sc_95lunchCode.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase07Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase07Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition0IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase07Objects2[k] = gdjs.sc_95lunchCode.GDPhase07Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase07Objects2.length = k;}if ( gdjs.sc_95lunchCode.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.sc_95lunchCode.GDPhase08Objects2.length;i<l;++i) {
    if ( gdjs.sc_95lunchCode.GDPhase08Objects2[i].isEnded() ) {
        gdjs.sc_95lunchCode.condition1IsTrue_1.val = true;
        gdjs.sc_95lunchCode.GDPhase08Objects2[k] = gdjs.sc_95lunchCode.GDPhase08Objects2[i];
        ++k;
    }
}
gdjs.sc_95lunchCode.GDPhase08Objects2.length = k;}}
gdjs.sc_95lunchCode.conditionTrue_1.val = true && gdjs.sc_95lunchCode.condition0IsTrue_1.val && gdjs.sc_95lunchCode.condition1IsTrue_1.val;
}
}if (gdjs.sc_95lunchCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Text_PC");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "inship2", false);
}}

}


};gdjs.sc_95lunchCode.eventsList10 = function(runtimeScene) {

{


gdjs.sc_95lunchCode.condition0IsTrue_0.val = false;
{
gdjs.sc_95lunchCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.sc_95lunchCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "inship2");
}}

}


};gdjs.sc_95lunchCode.eventsList11 = function(runtimeScene) {

{


gdjs.sc_95lunchCode.condition0IsTrue_0.val = false;
{
gdjs.sc_95lunchCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
}if (gdjs.sc_95lunchCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Skip_PC");
}}

}


{


gdjs.sc_95lunchCode.eventsList1(runtimeScene);
}


{


gdjs.sc_95lunchCode.eventsList2(runtimeScene);
}


{


gdjs.sc_95lunchCode.eventsList3(runtimeScene);
}


{


gdjs.sc_95lunchCode.eventsList4(runtimeScene);
}


{


gdjs.sc_95lunchCode.eventsList5(runtimeScene);
}


{


gdjs.sc_95lunchCode.eventsList6(runtimeScene);
}


{


gdjs.sc_95lunchCode.eventsList7(runtimeScene);
}


{


gdjs.sc_95lunchCode.eventsList8(runtimeScene);
}


{


gdjs.sc_95lunchCode.eventsList9(runtimeScene);
}


{


gdjs.sc_95lunchCode.eventsList10(runtimeScene);
}


};gdjs.sc_95lunchCode.eventsList12 = function(runtimeScene) {

{


gdjs.sc_95lunchCode.eventsList0(runtimeScene);
}


{


gdjs.sc_95lunchCode.eventsList11(runtimeScene);
}


};

gdjs.sc_95lunchCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sc_95lunchCode.GDPhase01Objects1.length = 0;
gdjs.sc_95lunchCode.GDPhase01Objects2.length = 0;
gdjs.sc_95lunchCode.GDPhase01Objects3.length = 0;
gdjs.sc_95lunchCode.GDPhase01Objects4.length = 0;
gdjs.sc_95lunchCode.GDPhase02Objects1.length = 0;
gdjs.sc_95lunchCode.GDPhase02Objects2.length = 0;
gdjs.sc_95lunchCode.GDPhase02Objects3.length = 0;
gdjs.sc_95lunchCode.GDPhase02Objects4.length = 0;
gdjs.sc_95lunchCode.GDPhase03Objects1.length = 0;
gdjs.sc_95lunchCode.GDPhase03Objects2.length = 0;
gdjs.sc_95lunchCode.GDPhase03Objects3.length = 0;
gdjs.sc_95lunchCode.GDPhase03Objects4.length = 0;
gdjs.sc_95lunchCode.GDPhase04Objects1.length = 0;
gdjs.sc_95lunchCode.GDPhase04Objects2.length = 0;
gdjs.sc_95lunchCode.GDPhase04Objects3.length = 0;
gdjs.sc_95lunchCode.GDPhase04Objects4.length = 0;
gdjs.sc_95lunchCode.GDPhase05Objects1.length = 0;
gdjs.sc_95lunchCode.GDPhase05Objects2.length = 0;
gdjs.sc_95lunchCode.GDPhase05Objects3.length = 0;
gdjs.sc_95lunchCode.GDPhase05Objects4.length = 0;
gdjs.sc_95lunchCode.GDPhase06Objects1.length = 0;
gdjs.sc_95lunchCode.GDPhase06Objects2.length = 0;
gdjs.sc_95lunchCode.GDPhase06Objects3.length = 0;
gdjs.sc_95lunchCode.GDPhase06Objects4.length = 0;
gdjs.sc_95lunchCode.GDPhase07Objects1.length = 0;
gdjs.sc_95lunchCode.GDPhase07Objects2.length = 0;
gdjs.sc_95lunchCode.GDPhase07Objects3.length = 0;
gdjs.sc_95lunchCode.GDPhase07Objects4.length = 0;
gdjs.sc_95lunchCode.GDPhase08Objects1.length = 0;
gdjs.sc_95lunchCode.GDPhase08Objects2.length = 0;
gdjs.sc_95lunchCode.GDPhase08Objects3.length = 0;
gdjs.sc_95lunchCode.GDPhase08Objects4.length = 0;
gdjs.sc_95lunchCode.GDText_95PCObjects1.length = 0;
gdjs.sc_95lunchCode.GDText_95PCObjects2.length = 0;
gdjs.sc_95lunchCode.GDText_95PCObjects3.length = 0;
gdjs.sc_95lunchCode.GDText_95PCObjects4.length = 0;
gdjs.sc_95lunchCode.GDText_95MobileObjects1.length = 0;
gdjs.sc_95lunchCode.GDText_95MobileObjects2.length = 0;
gdjs.sc_95lunchCode.GDText_95MobileObjects3.length = 0;
gdjs.sc_95lunchCode.GDText_95MobileObjects4.length = 0;
gdjs.sc_95lunchCode.GDSkipObjects1.length = 0;
gdjs.sc_95lunchCode.GDSkipObjects2.length = 0;
gdjs.sc_95lunchCode.GDSkipObjects3.length = 0;
gdjs.sc_95lunchCode.GDSkipObjects4.length = 0;
gdjs.sc_95lunchCode.GDskip_95pcObjects1.length = 0;
gdjs.sc_95lunchCode.GDskip_95pcObjects2.length = 0;
gdjs.sc_95lunchCode.GDskip_95pcObjects3.length = 0;
gdjs.sc_95lunchCode.GDskip_95pcObjects4.length = 0;

gdjs.sc_95lunchCode.eventsList12(runtimeScene);
return;

}

gdjs['sc_95lunchCode'] = gdjs.sc_95lunchCode;
