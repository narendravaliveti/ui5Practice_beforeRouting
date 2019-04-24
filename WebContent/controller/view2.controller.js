sap.ui.define(["sap/ui/core/mvc/Controller"]
    ,function (oController) {
        return oController.extend("controller.view1", {
            onBtnPress(){
                app.to(page1);
            }
        });
    });