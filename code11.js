gdjs.End_95FinalCode = {};
gdjs.End_95FinalCode.GDbackgroundObjects1= [];
gdjs.End_95FinalCode.GDbackgroundObjects2= [];
gdjs.End_95FinalCode.GDbackgroundObjects3= [];
gdjs.End_95FinalCode.GDplanetObjects1= [];
gdjs.End_95FinalCode.GDplanetObjects2= [];
gdjs.End_95FinalCode.GDplanetObjects3= [];
gdjs.End_95FinalCode.GDTitleObjects1= [];
gdjs.End_95FinalCode.GDTitleObjects2= [];
gdjs.End_95FinalCode.GDTitleObjects3= [];
gdjs.End_95FinalCode.GDdesObjects1= [];
gdjs.End_95FinalCode.GDdesObjects2= [];
gdjs.End_95FinalCode.GDdesObjects3= [];
gdjs.End_95FinalCode.GDtextObjects1= [];
gdjs.End_95FinalCode.GDtextObjects2= [];
gdjs.End_95FinalCode.GDtextObjects3= [];
gdjs.End_95FinalCode.GDBMObjects1= [];
gdjs.End_95FinalCode.GDBMObjects2= [];
gdjs.End_95FinalCode.GDBMObjects3= [];

gdjs.End_95FinalCode.conditionTrue_0 = {val:false};
gdjs.End_95FinalCode.condition0IsTrue_0 = {val:false};
gdjs.End_95FinalCode.condition1IsTrue_0 = {val:false};


gdjs.End_95FinalCode.mapOfGDgdjs_46End_9595FinalCode_46GDBMObjects1Objects = Hashtable.newFrom({"BM": gdjs.End_95FinalCode.GDBMObjects1});gdjs.End_95FinalCode.eventsList0 = function(runtimeScene) {

{


gdjs.End_95FinalCode.condition0IsTrue_0.val = false;
{
gdjs.End_95FinalCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.End_95FinalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu_Demo", false);
}}

}


};gdjs.End_95FinalCode.eventsList1 = function(runtimeScene) {

{


gdjs.End_95FinalCode.condition0IsTrue_0.val = false;
{
gdjs.End_95FinalCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.End_95FinalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BM"), gdjs.End_95FinalCode.GDBMObjects1);

gdjs.End_95FinalCode.condition0IsTrue_0.val = false;
{
gdjs.End_95FinalCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.End_95FinalCode.mapOfGDgdjs_46End_9595FinalCode_46GDBMObjects1Objects, runtimeScene, true, false);
}if (gdjs.End_95FinalCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.End_95FinalCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.End_95FinalCode.eventsList2 = function(runtimeScene) {

{


gdjs.End_95FinalCode.eventsList1(runtimeScene);
}


};

gdjs.End_95FinalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.End_95FinalCode.GDbackgroundObjects1.length = 0;
gdjs.End_95FinalCode.GDbackgroundObjects2.length = 0;
gdjs.End_95FinalCode.GDbackgroundObjects3.length = 0;
gdjs.End_95FinalCode.GDplanetObjects1.length = 0;
gdjs.End_95FinalCode.GDplanetObjects2.length = 0;
gdjs.End_95FinalCode.GDplanetObjects3.length = 0;
gdjs.End_95FinalCode.GDTitleObjects1.length = 0;
gdjs.End_95FinalCode.GDTitleObjects2.length = 0;
gdjs.End_95FinalCode.GDTitleObjects3.length = 0;
gdjs.End_95FinalCode.GDdesObjects1.length = 0;
gdjs.End_95FinalCode.GDdesObjects2.length = 0;
gdjs.End_95FinalCode.GDdesObjects3.length = 0;
gdjs.End_95FinalCode.GDtextObjects1.length = 0;
gdjs.End_95FinalCode.GDtextObjects2.length = 0;
gdjs.End_95FinalCode.GDtextObjects3.length = 0;
gdjs.End_95FinalCode.GDBMObjects1.length = 0;
gdjs.End_95FinalCode.GDBMObjects2.length = 0;
gdjs.End_95FinalCode.GDBMObjects3.length = 0;

gdjs.End_95FinalCode.eventsList2(runtimeScene);
return;

}

gdjs['End_95FinalCode'] = gdjs.End_95FinalCode;
