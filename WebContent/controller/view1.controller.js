sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
    ],function (oController,oMessageToast,JSONModel) {
                return oController.extend("controller.view1", {
                    onInit() {
                        var oData = {
                            student : {
                                name : "Narendra"
                            }
                        };
                        var oModel = new JSONModel(oData);
                        this.getView().setModel(oModel);
                    },
                    onBtnPress() {
                        app.to(page2);
                    },
                    onBtnPress1(oController) {
                        var oName = this.getView().getModel().getProperty("/student").name;
                        oMessageToast.show("Hello "+oName);
                    }
                });
});