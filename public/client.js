
$(document).ready(function(){
    $("#register_member_btn").click(function(){
    //   $(this).hide();
        const name = $("#name").val();
        const id = $("#id").val();
        const pw = $("#pw").val();
        alert(name + id + pw);

        $.post("member/register",
            {
            name: name,
            id: id,
            pw: pw
            },
            function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});