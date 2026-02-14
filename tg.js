
async function send(text) {
    botToken = '8052885614:AAGXToQXt7mlc-QhUiiLkXIjEMO0Bj28pag'
    chatId = '8528843279'
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId,text:text,parse_mode:"Markdown" })
  });
  return res
}


