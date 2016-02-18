/*(function(app) {
  app.Hero = Hero;
  
  function Hero(id, name, power, alterEgo) {
    this.id = id;
    this.name = name;
    this.power = power;
    this.alterEgo = alterEgo;
  }
})(window.app || (window.app = {}));*/


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

(function(app) {
	app.Workflow = Workflow;

	function Workflow(units, hoursLeft, avgRateStow, numStow, avgRateRec, numRec, finalValue, hrsToFinishForOneAssociate, hrsNeededToFinish) {
		this.units = units;
		this.hoursLeft = hoursLeft;
		this.avgRateStow = avgRateStow;
		this.numStow = numStow;
		this.avgRateRec = avgRateRec;
		this.numRec = numRec;
		this.finalValue = finalValue;
		this.hrsToFinishForOneAssociate = hrsToFinishForOneAssociate;
		this.hrsNeededToFinish = hrsNeededToFinish;
		
	}
})(window.app || (window.app = {}));