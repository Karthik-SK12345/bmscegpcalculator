const Send_Email = () => {
    let formData = new FormData();
    const to = $('#emailto').val();
    const name = $('#name').val();
    const usn = $('#usn').val();
    const branch = $('#branch').val();
    const semester = $('#semester').val();
    const attachmentlist = $('#email_attachments').get(0).dropzone;
    const files = attachmentlist.files;
    for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
    }

    const emailobject = {
        emailto: to,
        body: `<h3 style='display:block;color:red;'>Hello  ${name},</h3><h4>Thanks for using BMSCE GP CALCULATOR</h4><h4>Below we have attached Your Grade Card. Hope you like it. </h4><h4>Thank You,</h4><h4>BMSCE GP CALCULATOR.</h4>
 <hr>
 <h3 style='display:block;color:red;'><u>STUDENT DETAILS</u></h3>
                <h4>STUDENT NAME : ${name}</h4>
                <h4>USN : ${usn}</h4>
                <h4>BRANCH : ${branch}</h4>
                <h4>SEMESTER : ${semester}</h4>
            `,

        subject: `GRADE CARD FROM GP CALCULATOR - ${name}, ${usn}`,

    }
    formData.append('emailobject', JSON.stringify(emailobject));
    $.ajax({
        url: '/sendemail',
        type: 'POST',
        datatype: 'json',
        processData: false,
        contentType: false,
        data: formData,
        success: (response) => {
            console.log(response);
        },
        error: (error) => {
            console.log(error.message);
        }
    })
}