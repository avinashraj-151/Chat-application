import userMessage from "../Model/userMessage.js";

export const Addmessage = async (req, res, next) => {
  try {
    const { sender, receiver } = req.body;
    const data = await userMessage.create({
      message: {
        text: req.body.msg,
      },
      sender: sender,
      receiver: receiver,
    });
    res.json({
      msg: "message sent successfully",
      status: true,
    });
  } catch (error) {
    next(error);
  }
};

export const Getmessage = async (req, res, next) => {
  try {
    const { sender, receiver } = req.body;
    // console.log(sender, receiver);
    const data = await userMessage
      .find({
        $or: [
          { sender: sender, receiver: receiver },
          { sender: receiver, receiver: sender },
        ],
      })
      .sort({
        upadatedAt: 1,
      });

    // console.log(data);
    const msg = [];
    const result = data.map((message) => {
      return {
        // console.log(message.message.text);
        msg: message.message.text,
        sender: message.sender,
        receiver: message.receiver,
        time: message.createdAt,
      };
    });
    res.json({
      result,
    });
  } catch (error) {
    next(error);
  }
};
