

progress = document.getElementById("progress");
 	
    var totalFund = 0;
	
	
	var add = (function () {
				var counter = 0;
				return function () {return counter += 1;}
					})();
	
	
		
		function execute(){ 

				var x = document.getElementById("textbox1").value;
                    
				 totalFund +=  +x ;
                          
			  if(totalFund >=500) 
			  {
				  totalFund = 500 ;
			  }		
				
				progressFund = (((totalFund)/500)*100);
				progress.style.width = progressFund + "%";

				document.getElementById("donercount").innerHTML = add();
						
} 


