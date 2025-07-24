export default async function handler(req, res) {
  const { provider, api_key, model, messages } = req.body;

  let url = "";
  let headers = {};
  let body = {};

  switch (provider) {
    case "openrouter":
      url = "https://openrouter.ai/api/v1/chat/completions";
      headers = {
        "Authorization": `Bearer ${api_key}`,
        "Content-Type": "application/json"
      };
      body = { model, messages };
      break;

    case "gemini":
      url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${api_key}`;
      headers = { "Content-Type": "application/json" };
      body = { contents: [{ parts: [{ text: messages[0].content }] }] };
      break;

    case "huggingface":
      url = `https://api-inference.huggingface.co/models/${model}`;
      headers = {
        "Authorization": `Bearer ${api_key}`,
        "Content-Type": "application/json"
      };
      body = { inputs: messages[0].content };
      break;

    default:
      return res.status(400).json({ error: "Provedor inválido ou não suportado." });
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    });

    const data = await response.json();
    res.status(200).json({ result: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
