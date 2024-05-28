<script>
$(document).ready(function(){
    let checkboxes = $('input[type="checkbox"]');
    checkboxes.change(function(){
        if(checkboxes.filter(':checked').length >= 3){
            checkboxes.prop('disabled', true);
        }
    });
});
</script>
