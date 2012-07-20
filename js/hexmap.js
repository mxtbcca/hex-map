(function () {

	HexMap = function()
	{
		var h = 2.5980762110;
		var b = 1.5510080985;
		var s = 3.1020161970;
		
		var apex    = [];
			 apex[0] = {x:  b, y:  h};
			 apex[1] = {x:  s, y:  0};
			 apex[2] = {x:  b, y: -h};
			 apex[3] = {x: -b, y: -h};
			 apex[4] = {x: -s, y:  0};
			 apex[5] = {x: -b, y:  h};

		var step    = [];
			 step[0] = {x:  s+b, y:    h};
			 step[1] = {x:  s+b, y:   -h};
			 step[2] = {x:  0,   y: -2*h};
			 step[3] = {x: -s-b, y:   -h};
			 step[4] = {x: -s-b, y:    h};
			 step[5] = {x:  0,   y:  2*h};

 		// Private Methods

		var m1 = function(p0)
		{

		}
		// Public Methods

		this.getStepPoints = function(hcp)
		{
			// hcp - hex centre point: {x, y}
			
			var stepPoint;
			var stepPoints = [];
			
			var cip;
			for (cip = 0; cip < 6; cip++)
			{
				stepPoint = {};
				stepPoint.x = hcp.x + step[cip].x;
				stepPoint.y = hcp.y + step[cip].y;
				
				stepPoints[cip] = stepPoint;
			}
			return stepPoints;
		};
		this.getApexPoints = function(hcp)
		{
			// hcp - hex centre point: {x, y}
			
			var apexPoint;
			var apexPoints = [];
			
			var cip;
			for (cip = 0; cip < 6; cip++)
			{
				apexPoint = {};
				apexPoint.x = hcp.x + apex[cip].x;
				apexPoint.y = hcp.y + apex[cip].y;
				
				apexPoints[cip] = apexPoint;
			}
			return apexPoints;
		};
	};

}());

console.log("loaded: hexmap.js");

/* eof */
