<script>
$(function() {
	// showStatus('<?=$sName?>');
});


// ****************
// Enable/Disable Target text based on enabled checkbox
// ****************

function EnableDisableTextBox(chkBox, targetArea) {

        var myTarget = document.getElementById(targetArea);
        myTarget.disabled = chkBox.checked ? false : true;
        if (!myTarget.disabled) {
            myTarget.focus();
        }
    }


// ****************
// Construct CFG and export
// ****************


function saveCfg() {

	var xmlDoc = "<?xml version=\"1.0\"?>"
     
    var cnt = 2; 
	var i;
    

	for (i = 0; i < cnt; i++) {
  		var nm = document.getElementById("T"+(i+1)+"name").value;
  		var en = document.getElementById("T"+(i+1)+"enable").checked;
  		var td = document.getElementById("T"+(i+1)+"data").value;


        xmlDoc = xmlDoc+"\n<Target"+(i+1)+" name=\""+nm+"\" enabled=\""+en+"\">\n"+td+"\n</Target"+(i+1);
		
	}

	alert (xmlDoc);

}


</script>