
export default async function handler(req, res) {
    try {
      const response = await fetch('http://13.203.221.63:5000/jobs');
      const data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: 'Error fetching jobs' });
    }
  }
  