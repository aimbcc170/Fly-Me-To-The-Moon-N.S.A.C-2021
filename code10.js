gdjs.sc_95inship_402_41Code = {};
gdjs.sc_95inship_402_41Code.GDblackgroundObjects1= [];
gdjs.sc_95inship_402_41Code.GDblackgroundObjects2= [];
gdjs.sc_95inship_402_41Code.GDvideo_95testObjects1= [];
gdjs.sc_95inship_402_41Code.GDvideo_95testObjects2= [];
gdjs.sc_95inship_402_41Code.GDinshipObjects1= [];
gdjs.sc_95inship_402_41Code.GDinshipObjects2= [];
gdjs.sc_95inship_402_41Code.GDscObjects1= [];
gdjs.sc_95inship_402_41Code.GDscObjects2= [];

gdjs.sc_95inship_402_41Code.conditionTrue_0 = {val:false};
gdjs.sc_95inship_402_41Code.condition0IsTrue_0 = {val:false};
gdjs.sc_95inship_402_41Code.condition1IsTrue_0 = {val:false};


gdjs.sc_95inship_402_41Code.eventsList0 = function(runtimeScene) {

{


gdjs.sc_95inship_402_41Code.condition0IsTrue_0.val = false;
{
gdjs.sc_95inship_402_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.sc_95inship_402_41Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "inship2");
}}

}


};

gdjs.sc_95inship_402_41Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sc_95inship_402_41Code.GDblackgroundObjects1.length = 0;
gdjs.sc_95inship_402_41Code.GDblackgroundObjects2.length = 0;
gdjs.sc_95inship_402_41Code.GDvideo_95testObjects1.length = 0;
gdjs.sc_95inship_402_41Code.GDvideo_95testObjects2.length = 0;
gdjs.sc_95inship_402_41Code.GDinshipObjects1.length = 0;
gdjs.sc_95inship_402_41Code.GDinshipObjects2.length = 0;
gdjs.sc_95inship_402_41Code.GDscObjects1.length = 0;
gdjs.sc_95inship_402_41Code.GDscObjects2.length = 0;

gdjs.sc_95inship_402_41Code.eventsList0(runtimeScene);
return;

}

gdjs['sc_95inship_402_41Code'] = gdjs.sc_95inship_402_41Code;
