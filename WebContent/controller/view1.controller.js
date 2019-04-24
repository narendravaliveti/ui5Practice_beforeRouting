sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
    ],function (oController, oMessageToast, JSONModel, ResourceModel) {
                return oController.extend("controller.view1", {
                    onInit() {
                        // data model
                        var oModel = new JSONModel("JSON/model.json");
                        this.getView().setModel(oModel);
                        // i18n model
                        var i18nModel = new ResourceModel({
                            bundleName: "i18n.i18n"
                        });
                        this.getView().setModel(i18nModel, "i18n");
                    },
                    onBtnPress() {
                        app.to(page2);
                    },
                    onBtnPress1(oController) {
                        var oBundle = this.getView().getModel("i18n").getResourceBundle();
                        var oName = this.getView().getModel().getProperty("/student").name;
                        var sMsg = oBundle.getText("msgToastBtnPrsMsg", [oName]);
                        oMessageToast.show("Hello "+oName);
                    }
                });
});