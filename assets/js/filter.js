			$( "#notop" ).click(function( event ) {
				  event.preventDefault();
				});
				
			$( "#notop2" ).click(function( event ) {
			  event.preventDefault();
			});
	
                  function myFunction() {
          var x = document.getElementById("filter1");
          var y = document.getElementById("filter2");
          if (x.style.display === "none") {
              x.style.display = "block";
              y.style.display = "none";
			}
			}
                  function myFunction2() {
            var x = document.getElementById("filter2");
            var z = document.getElementById("filter1");
            if (x.style.display === "none") {
              z.style.display = "none";
              x.style.display = "block";
            }
			}	