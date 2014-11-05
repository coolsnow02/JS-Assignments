(function(MyFirstApplication, $, undefined){
	var addInputBlock = function(e){
		
		if($(e.target).is('.add')){
			var dummy = '<li><input type="text" name="text" placeholder="Text" class="testText"><input type="button" value="-" class="removeField btn close"><input type="button" value="+" class="addField btn add"></li>';
	        $('#fields').append(dummy);	   		
	        $('#fields li:not(:last) .addField').hide();
	        $('#fields li:not(:last) .removeField').show();
	       	$('#fields li:last .removeField').hide();	
	       	var inputText = $(e.target).siblings('.testText').val();
	       	console.log(inputText);
	       	$('.textTable').append('<tr><td>'+inputText+'</td></tr>');
		}
	}

	var removeInputBlock = function(e){
		if($(e.target).is('.close')){
			index_of_li = $(e.target).parents('li').index();
			$(e.target).parent('li').remove();
			rows = $('.textTable tr')
			rows[index_of_li].remove();
		}
	}	
	$(document).click(function(e){
		addInputBlock(e);
		removeInputBlock(e);
	});
	
}(window.MyFirstApplication = window.MyFirstApplication || {}, jQuery));
