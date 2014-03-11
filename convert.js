/**
 * 
 */

$(function(){
	var length = [ 'meter','foot','yard','inch','kilometer','mile','centimeter','millimeter','micrometer'];
	var lenthCvn = [1,0.3048,0.9144,0.0254001,1000,1609.35,0.01,0.001,0.000001];
	
	var temperature = ['celsius','kelvin','farenheit'];
	var temperatureCvn = [1,-272,-17.22222222222222];
	
	var weight = ['kilogram','gram','milligram','ton','pound','ounce','carrat','atomic mass'];
	var weightCvn = [1000,1,0.001,1000000,453.592,28.3495,0.2,1.6605401999104287e-24];
	
	var time = ['scecond','milliscecond','micrscecond','nanaoscecond','picoscecond','minute','hour','day','week','month'];
	var timeCvn = [1,0.001,0.000001,1e-9,1e-12,60,3600,86400,604800,2629800];
	
	var area = ['square meter','square foot','square yard','square inch','square kilometer','square mile','square centemeter','square millimeter','square micrometer','acre'];
	var areaCnv = [1,0.092903,0.836127,0.00064516,1000000,2589990,0.0001,0.000001,1e-12,4046.86];
	
	var volume = ['cubic meter','cubic foot','cubic yard','cubic inch','cubic kilometer','cubic mile','cubic centemeter','cubic millimeter','liter','milliliter','pint','quart','gallon'];
	var volumCvn = [1,0.0283168,0.764555,0.0000163871,1000000000,4168180000,0.000001,1e-9,0.001,0.000001];
	var map = {};
	
	$.each( length, function( i, val ) {
		
		$('#unitFrom').append(new Option(val, val, true, true));
		$('#unitTo').append(new Option(val, val, true, true));
		map[val] = lenthCvn[i];
			});
	$("#length").click(function (){
		$('#unitFrom').html("");
		$('#unitTo').html("");
		map = {};
		$.each( length, function( i, val ) {
			$('#unitFrom').append(new Option(val, val, true, true));
			$('#unitTo').append(new Option(val, val, true, true));
			
			map[val] = lenthCvn[i];
		});
	});
	$("#Temperature").click(function (){
		$('#unitFrom').html("");
		$('#unitTo').html("");
		map = {};
		$.each( temperature, function( i, val ) {
			$('#unitFrom').append(new Option(val, val, true, true));
			$('#unitTo').append(new Option(val, val, true, true));
			map[val] = temperatureCvn[i];
		});
		
	});
	$("#Weight").click(function (){
		$('#unitFrom').html("");
		$('#unitTo').html("");
		map = {};
		$.each( weight, function( i, val ) {
			$('#unitFrom').append(new Option(val, val, true, true));
			$('#unitTo').append(new Option(val, val, true, true));
			map[val] = weightCvn[i];
		});
	});
	$("#Time").click(function (){
		$('#unitFrom').html("");
		$('#unitTo').html("");
		map = {};
		$.each( time, function( i, val ) {
			$('#unitFrom').append(new Option(val, val, true, true));
			$('#unitTo').append(new Option(val, val, true, true));
			map[val] = timeCvn[i];
		});
	});
	$("#Area").click(function (){
		$('#unitFrom').html("");
		$('#unitTo').html("");
		map = {};
		$.each( area, function( i, val ) {
			$('#unitFrom').append(new Option(val, val, true, true));
			$('#unitTo').append(new Option(val, val, true, true));
			map[val] = areaCnv[i];
		});
	});
	$("#Volume").click(function (){
		$('#unitFrom').html("");
		$('#unitTo').html("");
		map = {};
		$.each( volume, function( i, val ) {
			$('#unitFrom').append(new Option(val, val, true, true));
			$('#unitTo').append(new Option(val, val, true, true));
			map[val] = volumCvn[i];
		});
	});
	$("#convert").click(function (){
		var from = $("#from").val();
		var unitFrom = $("#unitFrom").val();
		var unitTo = $("#unitTo").val();
		var fromVlue = $.map( map, function( val, key ) {
			if(key == unitFrom) {
				return val;
			}
			});
		var toValue = 	$.map( map, function( val, key ) {
			if(key == unitTo) {
				return val;
			}
		});
	var res =	(Number(fromVlue) / Number(toValue)) * from;
	$("#to").val(res);	
	$("#convertResult").html(from+" "+unitFrom+" is "+res+" "+unitTo);
	$("#convertResult").show();
	});
	
	$("#reset").click(function (){
		$("#from").val('');
		$("#to").val('');
		$("#convertResult").html("");
		$('#unitFrom').html("");
		$('#unitTo').html("");
		$('#unitFrom').val("");
		$('#unitTo').val("");
	});
});
