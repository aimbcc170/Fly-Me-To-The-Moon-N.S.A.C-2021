gdjs.inshipCode = {};
gdjs.inshipCode.GDNewObjectObjects1= [];
gdjs.inshipCode.GDNewObjectObjects2= [];
gdjs.inshipCode.GDNewObjectObjects3= [];
gdjs.inshipCode.GDbackgroundObjects1= [];
gdjs.inshipCode.GDbackgroundObjects2= [];
gdjs.inshipCode.GDbackgroundObjects3= [];
gdjs.inshipCode.GDin_95rocket_95testObjects1= [];
gdjs.inshipCode.GDin_95rocket_95testObjects2= [];
gdjs.inshipCode.GDin_95rocket_95testObjects3= [];
gdjs.inshipCode.GDNewObject2Objects1= [];
gdjs.inshipCode.GDNewObject2Objects2= [];
gdjs.inshipCode.GDNewObject2Objects3= [];
gdjs.inshipCode.GDscObjects1= [];
gdjs.inshipCode.GDscObjects2= [];
gdjs.inshipCode.GDscObjects3= [];
gdjs.inshipCode.GDbuttonObjects1= [];
gdjs.inshipCode.GDbuttonObjects2= [];
gdjs.inshipCode.GDbuttonObjects3= [];

gdjs.inshipCode.conditionTrue_0 = {val:false};
gdjs.inshipCode.condition0IsTrue_0 = {val:false};
gdjs.inshipCode.condition1IsTrue_0 = {val:false};


gdjs.inshipCode.mapOfGDgdjs_46inshipCode_46GDbuttonObjects2Objects = Hashtable.newFrom({"button": gdjs.inshipCode.GDbuttonObjects2});gdjs.inshipCode.eventsList0 = function(runtimeScene) {

{


gdjs.inshipCode.condition0IsTrue_0.val = false;
{
gdjs.inshipCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.inshipCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "zapsplat_multimedia_button_press_plastic_click_001_36868.mp3", false, 50, 1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "sc_lunch");
}}

}


};gdjs.inshipCode.mapOfGDgdjs_46inshipCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.inshipCode.GDbuttonObjects1});gdjs.inshipCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.inshipCode.GDbuttonObjects2);

gdjs.inshipCode.condition0IsTrue_0.val = false;
{
gdjs.inshipCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.inshipCode.mapOfGDgdjs_46inshipCode_46GDbuttonObjects2Objects, runtimeScene, true, false);
}if (gdjs.inshipCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inshipCode.GDbuttonObjects2 */
{for(var i = 0, len = gdjs.inshipCode.GDbuttonObjects2.length ;i < len;++i) {
    gdjs.inshipCode.GDbuttonObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.inshipCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.inshipCode.GDbuttonObjects1);

gdjs.inshipCode.condition0IsTrue_0.val = false;
{
gdjs.inshipCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.inshipCode.mapOfGDgdjs_46inshipCode_46GDbuttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.inshipCode.condition0IsTrue_0.val) {
/* Reuse gdjs.inshipCode.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.inshipCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.inshipCode.GDbuttonObjects1[i].setAnimation(0);
}
}}

}


};gdjs.inshipCode.eventsList2 = function(runtimeScene) {

{


gdjs.inshipCode.eventsList1(runtimeScene);
}


};

gdjs.inshipCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.inshipCode.GDNewObjectObjects1.length = 0;
gdjs.inshipCode.GDNewObjectObjects2.length = 0;
gdjs.inshipCode.GDNewObjectObjects3.length = 0;
gdjs.inshipCode.GDbackgroundObjects1.length = 0;
gdjs.inshipCode.GDbackgroundObjects2.length = 0;
gdjs.inshipCode.GDbackgroundObjects3.length = 0;
gdjs.inshipCode.GDin_95rocket_95testObjects1.length = 0;
gdjs.inshipCode.GDin_95rocket_95testObjects2.length = 0;
gdjs.inshipCode.GDin_95rocket_95testObjects3.length = 0;
gdjs.inshipCode.GDNewObject2Objects1.length = 0;
gdjs.inshipCode.GDNewObject2Objects2.length = 0;
gdjs.inshipCode.GDNewObject2Objects3.length = 0;
gdjs.inshipCode.GDscObjects1.length = 0;
gdjs.inshipCode.GDscObjects2.length = 0;
gdjs.inshipCode.GDscObjects3.length = 0;
gdjs.inshipCode.GDbuttonObjects1.length = 0;
gdjs.inshipCode.GDbuttonObjects2.length = 0;
gdjs.inshipCode.GDbuttonObjects3.length = 0;

gdjs.inshipCode.eventsList2(runtimeScene);
return;

}

gdjs['inshipCode'] = gdjs.inshipCode;
