gdjs.inship2Code = {};
gdjs.inship2Code.GDblackgroundObjects1= [];
gdjs.inship2Code.GDblackgroundObjects2= [];
gdjs.inship2Code.GDblackgroundObjects3= [];
gdjs.inship2Code.GDNewObjectObjects1= [];
gdjs.inship2Code.GDNewObjectObjects2= [];
gdjs.inship2Code.GDNewObjectObjects3= [];
gdjs.inship2Code.GDin_95rocket_95testObjects1= [];
gdjs.inship2Code.GDin_95rocket_95testObjects2= [];
gdjs.inship2Code.GDin_95rocket_95testObjects3= [];
gdjs.inship2Code.GDNewObject2Objects1= [];
gdjs.inship2Code.GDNewObject2Objects2= [];
gdjs.inship2Code.GDNewObject2Objects3= [];
gdjs.inship2Code.GDscObjects1= [];
gdjs.inship2Code.GDscObjects2= [];
gdjs.inship2Code.GDscObjects3= [];
gdjs.inship2Code.GDbuttonObjects1= [];
gdjs.inship2Code.GDbuttonObjects2= [];
gdjs.inship2Code.GDbuttonObjects3= [];

gdjs.inship2Code.conditionTrue_0 = {val:false};
gdjs.inship2Code.condition0IsTrue_0 = {val:false};
gdjs.inship2Code.condition1IsTrue_0 = {val:false};


gdjs.inship2Code.mapOfGDgdjs_46inship2Code_46GDbuttonObjects2Objects = Hashtable.newFrom({"button": gdjs.inship2Code.GDbuttonObjects2});gdjs.inship2Code.eventsList0 = function(runtimeScene) {

{


gdjs.inship2Code.condition0IsTrue_0.val = false;
{
gdjs.inship2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.inship2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "zapsplat_multimedia_button_press_plastic_click_001_368683.mp3", false, 50, 1);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "landing");
}}

}


};gdjs.inship2Code.mapOfGDgdjs_46inship2Code_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.inship2Code.GDbuttonObjects1});gdjs.inship2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.inship2Code.GDbuttonObjects2);

gdjs.inship2Code.condition0IsTrue_0.val = false;
{
gdjs.inship2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.inship2Code.mapOfGDgdjs_46inship2Code_46GDbuttonObjects2Objects, runtimeScene, true, false);
}if (gdjs.inship2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.inship2Code.GDbuttonObjects2 */
{for(var i = 0, len = gdjs.inship2Code.GDbuttonObjects2.length ;i < len;++i) {
    gdjs.inship2Code.GDbuttonObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.inship2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.inship2Code.GDbuttonObjects1);

gdjs.inship2Code.condition0IsTrue_0.val = false;
{
gdjs.inship2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.inship2Code.mapOfGDgdjs_46inship2Code_46GDbuttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.inship2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.inship2Code.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.inship2Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.inship2Code.GDbuttonObjects1[i].setAnimation(0);
}
}}

}


};gdjs.inship2Code.eventsList2 = function(runtimeScene) {

{


gdjs.inship2Code.eventsList1(runtimeScene);
}


};

gdjs.inship2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.inship2Code.GDblackgroundObjects1.length = 0;
gdjs.inship2Code.GDblackgroundObjects2.length = 0;
gdjs.inship2Code.GDblackgroundObjects3.length = 0;
gdjs.inship2Code.GDNewObjectObjects1.length = 0;
gdjs.inship2Code.GDNewObjectObjects2.length = 0;
gdjs.inship2Code.GDNewObjectObjects3.length = 0;
gdjs.inship2Code.GDin_95rocket_95testObjects1.length = 0;
gdjs.inship2Code.GDin_95rocket_95testObjects2.length = 0;
gdjs.inship2Code.GDin_95rocket_95testObjects3.length = 0;
gdjs.inship2Code.GDNewObject2Objects1.length = 0;
gdjs.inship2Code.GDNewObject2Objects2.length = 0;
gdjs.inship2Code.GDNewObject2Objects3.length = 0;
gdjs.inship2Code.GDscObjects1.length = 0;
gdjs.inship2Code.GDscObjects2.length = 0;
gdjs.inship2Code.GDscObjects3.length = 0;
gdjs.inship2Code.GDbuttonObjects1.length = 0;
gdjs.inship2Code.GDbuttonObjects2.length = 0;
gdjs.inship2Code.GDbuttonObjects3.length = 0;

gdjs.inship2Code.eventsList2(runtimeScene);
return;

}

gdjs['inship2Code'] = gdjs.inship2Code;
