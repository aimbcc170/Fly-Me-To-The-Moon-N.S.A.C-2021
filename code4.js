gdjs.landingCode = {};
gdjs.landingCode.GDblackground22Objects1= [];
gdjs.landingCode.GDblackground22Objects2= [];
gdjs.landingCode.GDblackground22Objects3= [];
gdjs.landingCode.GDblackground2Objects1= [];
gdjs.landingCode.GDblackground2Objects2= [];
gdjs.landingCode.GDblackground2Objects3= [];
gdjs.landingCode.GDblackgroundObjects1= [];
gdjs.landingCode.GDblackgroundObjects2= [];
gdjs.landingCode.GDblackgroundObjects3= [];
gdjs.landingCode.GDNewObjectObjects1= [];
gdjs.landingCode.GDNewObjectObjects2= [];
gdjs.landingCode.GDNewObjectObjects3= [];
gdjs.landingCode.GDin_95rocket_95testObjects1= [];
gdjs.landingCode.GDin_95rocket_95testObjects2= [];
gdjs.landingCode.GDin_95rocket_95testObjects3= [];
gdjs.landingCode.GDNewObject2Objects1= [];
gdjs.landingCode.GDNewObject2Objects2= [];
gdjs.landingCode.GDNewObject2Objects3= [];
gdjs.landingCode.GDscObjects1= [];
gdjs.landingCode.GDscObjects2= [];
gdjs.landingCode.GDscObjects3= [];
gdjs.landingCode.GDbuttonObjects1= [];
gdjs.landingCode.GDbuttonObjects2= [];
gdjs.landingCode.GDbuttonObjects3= [];
gdjs.landingCode.GDMoonObjects1= [];
gdjs.landingCode.GDMoonObjects2= [];
gdjs.landingCode.GDMoonObjects3= [];

gdjs.landingCode.conditionTrue_0 = {val:false};
gdjs.landingCode.condition0IsTrue_0 = {val:false};
gdjs.landingCode.condition1IsTrue_0 = {val:false};


gdjs.landingCode.mapOfGDgdjs_46landingCode_46GDMoonObjects2Objects = Hashtable.newFrom({"Moon": gdjs.landingCode.GDMoonObjects2});gdjs.landingCode.mapOfGDgdjs_46landingCode_46GDblackground2Objects2Objects = Hashtable.newFrom({"blackground2": gdjs.landingCode.GDblackground2Objects2});gdjs.landingCode.eventsList0 = function(runtimeScene) {

{


gdjs.landingCode.condition0IsTrue_0.val = false;
{
gdjs.landingCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("wait")) == 100;
}if (gdjs.landingCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End_Final", false);
}}

}


};gdjs.landingCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.landingCode.GDMoonObjects1, gdjs.landingCode.GDMoonObjects2);

gdjs.copyArray(runtimeScene.getObjects("blackground2"), gdjs.landingCode.GDblackground2Objects2);

gdjs.landingCode.condition0IsTrue_0.val = false;
{
gdjs.landingCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.landingCode.mapOfGDgdjs_46landingCode_46GDMoonObjects2Objects, gdjs.landingCode.mapOfGDgdjs_46landingCode_46GDblackground2Objects2Objects, false, runtimeScene, false);
}if (gdjs.landingCode.condition0IsTrue_0.val) {
/* Reuse gdjs.landingCode.GDMoonObjects2 */
{for(var i = 0, len = gdjs.landingCode.GDMoonObjects2.length ;i < len;++i) {
    gdjs.landingCode.GDMoonObjects2[i].clearForces();
}
}}

}


{


{
{runtimeScene.getVariables().get("wait").add(1);
}
{ //Subevents
gdjs.landingCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.landingCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Moon"), gdjs.landingCode.GDMoonObjects1);
{for(var i = 0, len = gdjs.landingCode.GDMoonObjects1.length ;i < len;++i) {
    gdjs.landingCode.GDMoonObjects1[i].addForce(0, -(25), 1);
}
}
{ //Subevents
gdjs.landingCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.landingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.landingCode.GDblackground22Objects1.length = 0;
gdjs.landingCode.GDblackground22Objects2.length = 0;
gdjs.landingCode.GDblackground22Objects3.length = 0;
gdjs.landingCode.GDblackground2Objects1.length = 0;
gdjs.landingCode.GDblackground2Objects2.length = 0;
gdjs.landingCode.GDblackground2Objects3.length = 0;
gdjs.landingCode.GDblackgroundObjects1.length = 0;
gdjs.landingCode.GDblackgroundObjects2.length = 0;
gdjs.landingCode.GDblackgroundObjects3.length = 0;
gdjs.landingCode.GDNewObjectObjects1.length = 0;
gdjs.landingCode.GDNewObjectObjects2.length = 0;
gdjs.landingCode.GDNewObjectObjects3.length = 0;
gdjs.landingCode.GDin_95rocket_95testObjects1.length = 0;
gdjs.landingCode.GDin_95rocket_95testObjects2.length = 0;
gdjs.landingCode.GDin_95rocket_95testObjects3.length = 0;
gdjs.landingCode.GDNewObject2Objects1.length = 0;
gdjs.landingCode.GDNewObject2Objects2.length = 0;
gdjs.landingCode.GDNewObject2Objects3.length = 0;
gdjs.landingCode.GDscObjects1.length = 0;
gdjs.landingCode.GDscObjects2.length = 0;
gdjs.landingCode.GDscObjects3.length = 0;
gdjs.landingCode.GDbuttonObjects1.length = 0;
gdjs.landingCode.GDbuttonObjects2.length = 0;
gdjs.landingCode.GDbuttonObjects3.length = 0;
gdjs.landingCode.GDMoonObjects1.length = 0;
gdjs.landingCode.GDMoonObjects2.length = 0;
gdjs.landingCode.GDMoonObjects3.length = 0;

gdjs.landingCode.eventsList2(runtimeScene);
return;

}

gdjs['landingCode'] = gdjs.landingCode;
