import mailjet from "node-mailjet";

interface SendData {
    emailFrom: string;
    from: string;
    emailTo: string;
    to: string;
    subject: string;
    text: string;
}

const client = mailjet.Client.apiConnect(process.env.MJ_APIKEY_PUBLIC ?? "", process.env.MJ_APIKEY_PRIVATE ?? "");

async function mailsend(props: SendData) {
    const preparedSendData = {
        Messages: [
            {
                From: {
                    Email: props.emailFrom,
                    Name: props.from,
                },
                To: [
                    {
                        Email: props.emailTo,
                        Name: props.to,
                    },
                ],
                Subject: props.subject,
                TextPart: props.text,
                HTMLPart:
                    '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
            },
        ],
    };

    const request = client.post("send", {version: "v3.1"}).request(preparedSendData);
    const response = await request;

    return response.body;
}

export {mailsend};
