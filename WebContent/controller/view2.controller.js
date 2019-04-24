sap.ui.define(["sap/ui/core/mvc/Controller"]
    ,function (oController) {
        return oController.extend("ui5practice_beforerouting.view1", {
            onBtnPress(){
                app.to(page1);
            }
        });
    });