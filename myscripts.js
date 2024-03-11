$(document).ready(function() {
    $('#myformid').submit(function(event) {
        if ($('input[name="honeypot"]').val() === '1') {
            event.preventDefault();
            console.log('Form submission prevented by honeypot.');
        }
    });
});