gdjs.menu_95DemoCode = {};
gdjs.menu_95DemoCode.GDMenu_95testObjects1= [];
gdjs.menu_95DemoCode.GDMenu_95testObjects2= [];
gdjs.menu_95DemoCode.GDMenu_95testObjects3= [];
gdjs.menu_95DemoCode.GDMenu_95testObjects4= [];
gdjs.menu_95DemoCode.GDMenu_95baseObjects1= [];
gdjs.menu_95DemoCode.GDMenu_95baseObjects2= [];
gdjs.menu_95DemoCode.GDMenu_95baseObjects3= [];
gdjs.menu_95DemoCode.GDMenu_95baseObjects4= [];
gdjs.menu_95DemoCode.GDstart_95buttonObjects1= [];
gdjs.menu_95DemoCode.GDstart_95buttonObjects2= [];
gdjs.menu_95DemoCode.GDstart_95buttonObjects3= [];
gdjs.menu_95DemoCode.GDstart_95buttonObjects4= [];
gdjs.menu_95DemoCode.GDtext1Objects1= [];
gdjs.menu_95DemoCode.GDtext1Objects2= [];
gdjs.menu_95DemoCode.GDtext1Objects3= [];
gdjs.menu_95DemoCode.GDtext1Objects4= [];
gdjs.menu_95DemoCode.GDNewObjectObjects1= [];
gdjs.menu_95DemoCode.GDNewObjectObjects2= [];
gdjs.menu_95DemoCode.GDNewObjectObjects3= [];
gdjs.menu_95DemoCode.GDNewObjectObjects4= [];
gdjs.menu_95DemoCode.GDTutorialObjects1= [];
gdjs.menu_95DemoCode.GDTutorialObjects2= [];
gdjs.menu_95DemoCode.GDTutorialObjects3= [];
gdjs.menu_95DemoCode.GDTutorialObjects4= [];

gdjs.menu_95DemoCode.conditionTrue_0 = {val:false};
gdjs.menu_95DemoCode.condition0IsTrue_0 = {val:false};
gdjs.menu_95DemoCode.condition1IsTrue_0 = {val:false};
gdjs.menu_95DemoCode.conditionTrue_1 = {val:false};
gdjs.menu_95DemoCode.condition0IsTrue_1 = {val:false};
gdjs.menu_95DemoCode.condition1IsTrue_1 = {val:false};


gdjs.menu_95DemoCode.mapOfGDgdjs_46menu_9595DemoCode_46GDstart_9595buttonObjects2Objects = Hashtable.newFrom({"start_button": gdjs.menu_95DemoCode.GDstart_95buttonObjects2});gdjs.menu_95DemoCode.eventsList0 = function(runtimeScene) {

{


gdjs.menu_95DemoCode.condition0IsTrue_0.val = false;
{
{gdjs.menu_95DemoCode.conditionTrue_1 = gdjs.menu_95DemoCode.condition0IsTrue_0;
gdjs.menu_95DemoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8793692);
}
}if (gdjs.menu_95DemoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "zapsplat_multimedia_button_click_007_538682.mp3", false, 50, 1);
}}

}


{


gdjs.menu_95DemoCode.condition0IsTrue_0.val = false;
{
gdjs.menu_95DemoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.menu_95DemoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "sc_inship", false);
}}

}


};gdjs.menu_95DemoCode.mapOfGDgdjs_46menu_9595DemoCode_46GDTutorialObjects1Objects = Hashtable.newFrom({"Tutorial": gdjs.menu_95DemoCode.GDTutorialObjects1});gdjs.menu_95DemoCode.eventsList1 = function(runtimeScene) {

{


gdjs.menu_95DemoCode.condition0IsTrue_0.val = false;
{
{gdjs.menu_95DemoCode.conditionTrue_1 = gdjs.menu_95DemoCode.condition0IsTrue_0;
gdjs.menu_95DemoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8795420);
}
}if (gdjs.menu_95DemoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "zapsplat_multimedia_button_click_007_538682.mp3", false, 50, 1);
}}

}


{


gdjs.menu_95DemoCode.condition0IsTrue_0.val = false;
{
gdjs.menu_95DemoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.menu_95DemoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}}

}


};gdjs.menu_95DemoCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("start_button"), gdjs.menu_95DemoCode.GDstart_95buttonObjects2);

gdjs.menu_95DemoCode.condition0IsTrue_0.val = false;
{
gdjs.menu_95DemoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menu_95DemoCode.mapOfGDgdjs_46menu_9595DemoCode_46GDstart_9595buttonObjects2Objects, runtimeScene, true, false);
}if (gdjs.menu_95DemoCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.menu_95DemoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.menu_95DemoCode.GDTutorialObjects1);

gdjs.menu_95DemoCode.condition0IsTrue_0.val = false;
{
gdjs.menu_95DemoCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menu_95DemoCode.mapOfGDgdjs_46menu_9595DemoCode_46GDTutorialObjects1Objects, runtimeScene, true, false);
}if (gdjs.menu_95DemoCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.menu_95DemoCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.menu_95DemoCode.eventsList3 = function(runtimeScene) {

{


gdjs.menu_95DemoCode.eventsList2(runtimeScene);
}


};

gdjs.menu_95DemoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menu_95DemoCode.GDMenu_95testObjects1.length = 0;
gdjs.menu_95DemoCode.GDMenu_95testObjects2.length = 0;
gdjs.menu_95DemoCode.GDMenu_95testObjects3.length = 0;
gdjs.menu_95DemoCode.GDMenu_95testObjects4.length = 0;
gdjs.menu_95DemoCode.GDMenu_95baseObjects1.length = 0;
gdjs.menu_95DemoCode.GDMenu_95baseObjects2.length = 0;
gdjs.menu_95DemoCode.GDMenu_95baseObjects3.length = 0;
gdjs.menu_95DemoCode.GDMenu_95baseObjects4.length = 0;
gdjs.menu_95DemoCode.GDstart_95buttonObjects1.length = 0;
gdjs.menu_95DemoCode.GDstart_95buttonObjects2.length = 0;
gdjs.menu_95DemoCode.GDstart_95buttonObjects3.length = 0;
gdjs.menu_95DemoCode.GDstart_95buttonObjects4.length = 0;
gdjs.menu_95DemoCode.GDtext1Objects1.length = 0;
gdjs.menu_95DemoCode.GDtext1Objects2.length = 0;
gdjs.menu_95DemoCode.GDtext1Objects3.length = 0;
gdjs.menu_95DemoCode.GDtext1Objects4.length = 0;
gdjs.menu_95DemoCode.GDNewObjectObjects1.length = 0;
gdjs.menu_95DemoCode.GDNewObjectObjects2.length = 0;
gdjs.menu_95DemoCode.GDNewObjectObjects3.length = 0;
gdjs.menu_95DemoCode.GDNewObjectObjects4.length = 0;
gdjs.menu_95DemoCode.GDTutorialObjects1.length = 0;
gdjs.menu_95DemoCode.GDTutorialObjects2.length = 0;
gdjs.menu_95DemoCode.GDTutorialObjects3.length = 0;
gdjs.menu_95DemoCode.GDTutorialObjects4.length = 0;

gdjs.menu_95DemoCode.eventsList3(runtimeScene);
return;

}

gdjs['menu_95DemoCode'] = gdjs.menu_95DemoCode;
