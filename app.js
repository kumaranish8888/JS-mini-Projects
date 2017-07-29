

$('#target').change( function() {
   $(this).find(":selected").each(function () {
          //  console.log( $(this).val() );
       
        if($(this).val() == "Enter the value in Kilograms"){
            $('#myInput').on('input', function(e){
                var myValue = e.target.value;
                $('#kgOutput').html(myValue +' kg');
                $('#poundsOutput').html(myValue * 2.20 +' lb');
                $('#gramsOutput').html(myValue * 1000 +' g');
                $('#ouncesOutput').html(myValue * 35.274 +' oz');
            })
            
        } else if($(this).val() == "Enter the value in Pounds"){
            $('#myInput').on('input', function(e){
                var myValue = e.target.value;
                $('#poundsOutput').html(myValue +' lb');
                $('#kgOutput').html(myValue* 0.46 + ' kg');
                $('#gramsOutput').html(myValue * 453.592 +' g');
                $('#ouncesOutput').html(myValue * 16 +' oz');
            })
            
        } else if($(this).val() == "Enter the value in Ounces"){
            $('#myInput').on('input', function(e){
                var myValue = e.target.value;
                $('#ouncesOutput').html(myValue +' oz');
                $('#poundsOutput').html(myValue * 0.0625 +' lb');
                $('#gramsOutput').html(myValue * 28.3495 +' g');
                $('#kgOutput').html(myValue * 0.0283 +' kg');
            })
            
        } else if($(this).val() == "Enter the value in Grams"){
            $('#myInput').on('input', function(e){
                var myValue = e.target.value;
                $('#gramsOutput').html(myValue +' g');
                $('#poundsOutput').html(myValue * 0.0022 +' lb');
                $('#kgOutput').html(myValue * 0.001 +' kg');
                $('#ouncesOutput').html(myValue * 0.035 +' oz');
            })
            
        }
    });
 });

