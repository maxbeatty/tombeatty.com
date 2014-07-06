var mandrill = require('mandrill-api/mandrill'),
    mandrill_client = new mandrill.Mandrill(process.env.MANDRILL_KEY);

module.exports = {
  send: function (from, msg, cb) {
    mandrill_client.messages.send({
      message: {
        text: msg,
        subject: "Note from TomBeatty.com",
        "from_email": from,
        to: [{
          email: process.env.MANDRILL_TO
        }],
        headers: {
          "Reply-To": from
        }
      }
    },
    function(result) {
      /*
      [{
              "email": "recipient.email@example.com",
              "status": "sent",
              "reject_reason": "hard-bounce",
              "_id": "abc123abc123abc123abc123abc123"
          }]
      */
      switch (result[0].status) {
        case 'sent':
          cb(null);
          break;
        case 'rejected':
          cb(new Error(result[0].reject_reason));
          break;
        default:
          // queued, scheduled, or invalid
          cb(new Error(result[0].status));
      }
    },
    function(e) {
      // Mandrill returns the error as an object with name and message keys
      cb(e);
    });
  }
};
