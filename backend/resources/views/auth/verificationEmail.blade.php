<!DOCTYPE html>
<html>

    <head>
        <meta charset="UTF-8">
        <title>Email Verification - TransitEase</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f6f6f6;
                margin: 0;
                padding: 0;
            }

            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                overflow: hidden;
            }

            .header {
                background-color: #007bff;
                color: #ffffff;
                text-align: center;
                padding: 20px;
            }

            .header img {
                max-width: 100px;
                height: auto;
            }

            .content {
                padding: 20px;
                text-align: left;
                color: #333333;
            }

            .content h1 {
                font-size: 24px;
            }

            .content p {
                font-size: 16px;
            }

            .button-container {
                text-align: center;
                margin: 20px 0;
            }

            .button {
                background-color: #007bff;
                color: #ffffff;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                text-decoration: none;
                font-size: 16px;
            }

            .footer {
                background-color: #f6f6f6;
                text-align: center;
                padding: 10px;
                font-size: 14px;
                color: #999999;
            }
        </style>
    </head>

    <body>
        <div class="container">
            <div class="header">
                <img src="https://i.imgur.com/RISD7ev.png" alt="TransitEase Logo">
                <h1>TransitEase</h1>
            </div>
            <div class="content">
                <h1>Email Verification</h1>
                <p>Thank you for signing up with TransitEase! Please verify your email address by clicking the button
                    below:</p>
                <div class="button-container">
                    <a href={{ $url }} class="button">Verify Email</a>
                </div>
                <p>If you did not sign up for a TransitEase account, please ignore this email.</p>
                <p>Best regards,<br>The TransitEase Team</p>
            </div>
            <div class="footer">
                <p>&copy; 2024 TransitEase. All rights reserved.</p>
            </div>
        </div>
    </body>

</html>
