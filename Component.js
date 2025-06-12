sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";

	var Component = UIComponent.extend("io.citra.search.card.cfg.Component", {
		metadata: {
			manifest: "json"
		},
		onCardReady: function (oCard) {
			this.oCard = oCard;

			// Set 'parameters' model on the component
			var oParametersModel = oCard.getModel("parameters");
			if (oParametersModel) {
				this.setModel(oParametersModel, "parameters");
			}
		}
	});

	return Component;
});
