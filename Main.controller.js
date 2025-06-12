sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (
	Controller
) {
	"use strict";

	return Controller.extend("io.citra.card.wo.cfg.Main", {
		onGoPress: function () {
			var oCard = this.getOwnerComponent().oCard;
			const id = this.byId('inputField').getValue();
			var oModel = this.getView().getModel("parameters");
			let dynamicParamName = oModel.getProperty("/ibnParams/value");

			let ibnParams = {};
			ibnParams[dynamicParamName] = id;

			oCard.triggerAction({
				type: "Navigation",
				parameters: {
					ibnTarget: {
						semanticObject: oModel.getProperty("/semanticObject/value"),
						action: oModel.getProperty("/action/value")
					},
					ibnParams: ibnParams
				}
			});

		}

	});
});