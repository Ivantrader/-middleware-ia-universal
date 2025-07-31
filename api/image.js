export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { provider, apiKey, model, prompt } = req.body;

  if (!provider || !apiKey || !model || !prompt) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    if (provider === 'huggingface') {
      const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs: prompt })
      });

      if (!response.ok) {
        const error = await response.text();
        return res.status(response.status).json({ error });
      }

      const buffer = await response.arrayBuffer();
      const base64Image = Buffer.from(buffer).toString('base64');
      const mimeType = response.headers.get('content-type');

      return res.status(200).json({
        image: `data:${mimeType};base64,${base64Image}`
      });
    }

    res.status(400).json({ error: 'Unsupported provider' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
