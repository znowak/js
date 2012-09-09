function myFunction(id)
			{
				var node=document.getElementById(id);	
				var output=node.options[node.selectedIndex].value;
				document.getElementById("out").value=output;
				
			}