gdjs.TutorialCode = {};
gdjs.TutorialCode.GDBackgroundObjects1= [];
gdjs.TutorialCode.GDBackgroundObjects2= [];
gdjs.TutorialCode.GDBackgroundObjects3= [];
gdjs.TutorialCode.GDPlanetObjects1= [];
gdjs.TutorialCode.GDPlanetObjects2= [];
gdjs.TutorialCode.GDPlanetObjects3= [];
gdjs.TutorialCode.GDTutorialObjects1= [];
gdjs.TutorialCode.GDTutorialObjects2= [];
gdjs.TutorialCode.GDTutorialObjects3= [];
gdjs.TutorialCode.GDDesObjects1= [];
gdjs.TutorialCode.GDDesObjects2= [];
gdjs.TutorialCode.GDDesObjects3= [];
gdjs.TutorialCode.GDTu_95imageObjects1= [];
gdjs.TutorialCode.GDTu_95imageObjects2= [];
gdjs.TutorialCode.GDTu_95imageObjects3= [];
gdjs.TutorialCode.GDGreenArrowObjects1= [];
gdjs.TutorialCode.GDGreenArrowObjects2= [];
gdjs.TutorialCode.GDGreenArrowObjects3= [];
gdjs.TutorialCode.GDTextObjects1= [];
gdjs.TutorialCode.GDTextObjects2= [];
gdjs.TutorialCode.GDTextObjects3= [];
gdjs.TutorialCode.GDBMObjects1= [];
gdjs.TutorialCode.GDBMObjects2= [];
gdjs.TutorialCode.GDBMObjects3= [];

gdjs.TutorialCode.conditionTrue_0 = {val:false};
gdjs.TutorialCode.condition0IsTrue_0 = {val:false};
gdjs.TutorialCode.condition1IsTrue_0 = {val:false};
gdjs.TutorialCode.conditionTrue_1 = {val:false};
gdjs.TutorialCode.condition0IsTrue_1 = {val:false};
gdjs.TutorialCode.condition1IsTrue_1 = {val:false};


gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDBMObjects1Objects = Hashtable.newFrom({"BM": gdjs.TutorialCode.GDBMObjects1});gdjs.TutorialCode.eventsList0 = function(runtimeScene) {

{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition0IsTrue_0;
gdjs.TutorialCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8924660);
}
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "zapsplat_multimedia_button_click_007_53868.mp3", false, 50, 1);
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu_Demo", true);
}}

}


};gdjs.TutorialCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BM"), gdjs.TutorialCode.GDBMObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDBMObjects1Objects, runtimeScene, true, false);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.TutorialCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.TutorialCode.eventsList2 = function(runtimeScene) {

{


gdjs.TutorialCode.eventsList1(runtimeScene);
}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDBackgroundObjects1.length = 0;
gdjs.TutorialCode.GDBackgroundObjects2.length = 0;
gdjs.TutorialCode.GDBackgroundObjects3.length = 0;
gdjs.TutorialCode.GDPlanetObjects1.length = 0;
gdjs.TutorialCode.GDPlanetObjects2.length = 0;
gdjs.TutorialCode.GDPlanetObjects3.length = 0;
gdjs.TutorialCode.GDTutorialObjects1.length = 0;
gdjs.TutorialCode.GDTutorialObjects2.length = 0;
gdjs.TutorialCode.GDTutorialObjects3.length = 0;
gdjs.TutorialCode.GDDesObjects1.length = 0;
gdjs.TutorialCode.GDDesObjects2.length = 0;
gdjs.TutorialCode.GDDesObjects3.length = 0;
gdjs.TutorialCode.GDTu_95imageObjects1.length = 0;
gdjs.TutorialCode.GDTu_95imageObjects2.length = 0;
gdjs.TutorialCode.GDTu_95imageObjects3.length = 0;
gdjs.TutorialCode.GDGreenArrowObjects1.length = 0;
gdjs.TutorialCode.GDGreenArrowObjects2.length = 0;
gdjs.TutorialCode.GDGreenArrowObjects3.length = 0;
gdjs.TutorialCode.GDTextObjects1.length = 0;
gdjs.TutorialCode.GDTextObjects2.length = 0;
gdjs.TutorialCode.GDTextObjects3.length = 0;
gdjs.TutorialCode.GDBMObjects1.length = 0;
gdjs.TutorialCode.GDBMObjects2.length = 0;
gdjs.TutorialCode.GDBMObjects3.length = 0;

gdjs.TutorialCode.eventsList2(runtimeScene);
return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;
