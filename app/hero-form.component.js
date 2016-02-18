(function(app) {
    app.HeroFormComponent = ng.core
        .Component({
            selector: 'hero-form',
            templateUrl: 'app/hero-form.component.html'
        })
        .Class({
            constructor: function() {
                // this.powers = ['Really Smart', 'Super Flexible',
                //     'Super Hot', 'Weather Changer'
                // ];

                /*this.model = new app.Hero(18, 'Dr IQ', this.powers[0],
                    'Chuck Overstreet');*/

                this.model = new app.Workflow(19000, 6, 300, 12, 300, 6, "not sure", 0, 0);

                this.submitted = false;
            },


            calculate: function() {
                units = this.model.units;
                hoursLeft = this.model.hoursLeft;
                avgRateStow = this.model.avgRateStow;
                numStow = this.model.numStow;
                hrsToFinishForOneAssociate = 0;
                hrsNeededToFinish = 0;
                count = 0;

                balanced = false;

                while(balanced == false)
                {
                    hrsToFinishForOneAssociate = units/avgRateStow;
                    hrsNeededToFinish = hrsToFinishForOneAssociate / numStow;

                    this.model.hrsToFinishForOneAssociate = hrsToFinishForOneAssociate;
                    this.model.hrsNeededToFinish = (hrsNeededToFinish);
                    
                    if(hrsNeededToFinish < hoursLeft) {
                       balanced = true;
                    }
                    count++;
                    numStow++;

                }


                if(count == 0){
                    this.model.finalValue = "You are balanced";
                }
                else
                {
                    this.model.finalValue = "You need " + count + " stower(s) to balance remaining units.";
                }

                console.log("Total units estimated for current + rest of shift based on average rate " + units);
                console.log("Hours needed to finish with 1 stower: " + hrsToFinishForOneAssociate);
                console.log("Hours needed to finish with " + numStow + " stowers: " + hrsNeededToFinish);
                console.log(count + " extra stowers needed to finish");

            },

            // TODO: Remove this when we're done
            diagnostic: function() {
                return JSON.stringify(this.model);
            },


            //////// DO NOT SHOW IN DOCS ////////


        });
})(window.app || (window.app = {}));


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
