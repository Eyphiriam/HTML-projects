$(document).ready(function () {
    console.log("Page ready");

    function isValidObjectId(id) {
        return /^[0-9a-fA-F]{24}$/.test(id);
    }

    // Event handler for adding a student
    $("#addStudent").click(function () {
        console.log("Add button clicked");
        const student = {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            studentId: $("#studentId").val(),
            mailingAddress: $("#mailingAddress").val(),
            phoneNumber: $("#phoneNumber").val(),
            emailAddress: $("#emailAddress").val()
        };

        $.ajax({
            url: '/api/student',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(student),
            success: function (response) {
                alert("Student added successfully: " + JSON.stringify(response));
            },
            error: function (xhr) {
                alert("Failed to add student: " + xhr.responseText);
            }
        });
    });

    // Event handler for finding, updating, and deleting a student
    $("#findStudent, #updateStudent, #deleteStudent").click(function () {
        const studentId = $("#studentId").val();
        console.log("Using student ID:", studentId);

        var apiUrl = `/api/student/${studentId}`;
        var type = $(this).attr('id') === 'deleteStudent' ? 'DELETE' :
            $(this).attr('id') === 'updateStudent' ? 'PUT' : 'GET';
        var data = type === 'PUT' ? JSON.stringify({
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            mailingAddress: $("#mailingAddress").val(),
            phoneNumber: $("#phoneNumber").val(),
            emailAddress: $("#emailAddress").val(),
        }) : {};

        $.ajax({
            url: apiUrl,
            type: type,
            contentType: 'application/json',
            data: data,
            success: function (response) {
                if (type === 'GET') {
                    alert("Student found: " + JSON.stringify(response));
                } else if (type === 'PUT') {
                    alert("Student updated successfully: " + JSON.stringify(response));
                } else {
                    alert("Student deleted successfully");
                }
            },
            error: function (xhr) {
                var errMsg = "Failed to " + (type === 'GET' ? "find" : type === 'PUT' ? "update" : "delete") + " student: " + xhr.responseText;
                alert(errMsg);
            }

    });
    });
    // Event handler for clearing the input fields
    $("#clearFields").click(function() {
        // Clear each input field in the form
        $("#firstName").val('');
        $("#lastName").val('');
        $("#studentId").val('');
        $("#mailingAddress").val('');
        $("#phoneNumber").val('');
        $("#emailAddress").val('');
        console.log("Form fields cleared");
    });
});
