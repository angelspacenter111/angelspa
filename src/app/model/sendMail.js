import { Resend } from 'resend';

const resend = new Resend('re_MM1djwfk_BFRLM9aMTjZmk53q26mS5Msi');

const mailRequest = async (formData) => {

    console.log(formData);

    const { name, email, message } = formData;

    const { data: response, error } = await resend.emails.send({
        from: 'Angel Spa <noreply@resend.dev>', // ⚠️ apna domain use karo
        to: ['dhyeyrathod111@gmail.com'],
        subject: `New Inquiry from ${name}`,

        html: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <table align="center" width="100%" style="max-width:600px; background:#ffffff; border-radius:8px; overflow:hidden;">
          
          <tr>
            <td style="background:#000; color:#fff; padding:20px; text-align:center;">
              <h2 style="margin:0;">Angel Spa</h2>
              <p style="margin:5px 0 0; font-size:14px;">New Website Inquiry</p>
            </td>
          </tr>

          <tr>
            <td style="padding:20px;">
              <h3 style="margin-bottom:15px; color:#333;">Customer Details</h3>

              <table width="100%" style="border-collapse: collapse;">
                <tr>
                  <td style="padding:10px; border:1px solid #ddd;"><strong>Name</strong></td>
                  <td style="padding:10px; border:1px solid #ddd;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:10px; border:1px solid #ddd;"><strong>Email</strong></td>
                  <td style="padding:10px; border:1px solid #ddd;">${email}</td>
                </tr>
                <tr>
                  <td style="padding:10px; border:1px solid #ddd;"><strong>Message</strong></td>
                  <td style="padding:10px; border:1px solid #ddd;">${message}</td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="background:#f9f9f9; text-align:center; padding:15px; font-size:12px; color:#777;">
              © ${new Date().getFullYear()} Angel Spa
            </td>
          </tr>

        </table>
      </div>
    `,

        text: `
      New Inquiry from Angel Spa

      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
    });

    if (response.id !== '') {
        return { status: true, message: 'Email send successfully' }
    } else {
        return { status: false }
    }
};

export { mailRequest };
