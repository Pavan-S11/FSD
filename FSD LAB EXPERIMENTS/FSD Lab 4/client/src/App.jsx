import { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE = 'http://localhost:3000/api';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #0a0a0f;
    color: #f0f0f0;
    font-family: 'DM Mono', monospace;
    min-height: 100vh;
  }

  .app {
    max-width: 760px;
    margin: 0 auto;
    padding: 48px 24px;
  }

  .header {
    margin-bottom: 48px;
    animation: fadeDown 0.6s ease both;
  }

  .header h1 {
    font-family: 'Syne', sans-serif;
    font-size: 2.8rem;
    font-weight: 800;
    background: linear-gradient(135deg, #fff 0%, #a78bfa 60%, #60a5fa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.1;
  }

  .api-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 12px;
    padding: 6px 14px;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    border: 1px solid rgba(167,139,250,0.3);
    background: rgba(167,139,250,0.08);
    color: #a78bfa;
    animation: fadeDown 0.6s 0.15s ease both;
  }

  .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #4ade80;
    animation: pulse 2s infinite;
  }

  .dot.offline { background: #f87171; animation: none; }

  .card {
    background: #13131a;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 20px;
    padding: 28px;
    margin-bottom: 24px;
    transition: border-color 0.3s;
  }

  .card:hover { border-color: rgba(167,139,250,0.25); }

  .card-title {
    font-family: 'Syne', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .card-title span { color: #a78bfa; }

  /* Counter */
  .counter-display {
    font-family: 'Syne', sans-serif;
    font-size: 6rem;
    font-weight: 800;
    text-align: center;
    line-height: 1;
    color: #fff;
    padding: 24px 0;
    transition: transform 0.1s ease;
  }

  .counter-display.bump {
    animation: bump 0.2s ease;
  }

  .counter-btns {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 16px;
  }

  .btn {
    padding: 12px 28px;
    border-radius: 12px;
    border: none;
    font-family: 'DM Mono', monospace;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    letter-spacing: 0.03em;
  }

  .btn-primary {
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    color: #fff;
    box-shadow: 0 4px 20px rgba(124,58,237,0.35);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(124,58,237,0.5);
  }

  .btn-primary:active { transform: translateY(0); }

  .btn-ghost {
    background: rgba(255,255,255,0.06);
    color: #aaa;
    border: 1px solid rgba(255,255,255,0.1);
  }

  .btn-ghost:hover { background: rgba(255,255,255,0.1); color: #fff; }

  /* Tasks */
  .task-form {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  .task-input {
    flex: 1;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 12px 16px;
    color: #f0f0f0;
    font-family: 'DM Mono', monospace;
    font-size: 0.85rem;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
  }

  .task-input:focus {
    border-color: rgba(167,139,250,0.5);
    background: rgba(167,139,250,0.07);
  }

  .task-input::placeholder { color: #555; }

  .task-list { list-style: none; }

  .task-item {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 16px;
    border-radius: 12px;
    margin-bottom: 8px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.05);
    cursor: pointer;
    transition: all 0.2s ease;
    animation: slideIn 0.3s ease both;
  }

  .task-item:hover { background: rgba(167,139,250,0.08); border-color: rgba(167,139,250,0.2); }

  .task-item.done { opacity: 0.5; }

  .task-checkbox {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    border: 2px solid rgba(255,255,255,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.2s ease;
    background: transparent;
  }

  .task-item.done .task-checkbox {
    background: #7c3aed;
    border-color: #7c3aed;
  }

  .checkmark {
    color: white;
    font-size: 0.7rem;
    opacity: 0;
    transition: opacity 0.2s;
  }

  .task-item.done .checkmark { opacity: 1; }

  .task-text {
    font-size: 0.88rem;
    color: #ddd;
    transition: all 0.2s;
  }

  .task-item.done .task-text {
    text-decoration: line-through;
    color: #666;
  }

  .empty-state {
    text-align: center;
    padding: 32px;
    color: #444;
    font-size: 0.85rem;
  }

  .reload-row {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;
  }

  .btn-sm {
    padding: 7px 16px;
    font-size: 0.78rem;
    border-radius: 8px;
  }

  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-12px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes bump {
    0% { transform: scale(1); }
    50% { transform: scale(1.08); }
    100% { transform: scale(1); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  .card:nth-child(2) { animation: fadeDown 0.6s 0.1s ease both; }
  .card:nth-child(3) { animation: fadeDown 0.6s 0.2s ease both; }
`;

export default function App() {
  const [count, setCount] = useState(0);
  const [bump, setBump] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState('');
  const [apiOnline, setApiOnline] = useState(false);

  useEffect(() => {
    axios.get(`${API_BASE}/hello`)
      .then(res => { setApiMessage(res.data.message); setApiOnline(true); })
      .catch(() => { setApiMessage('Could not reach API'); setApiOnline(false); });
  }, []);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/tasks`);
      setTasks(res.data);
    } catch {
      alert('Failed to load tasks. Is the server running on port 3000?');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadTasks(); }, []);

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    try {
      const res = await axios.post(`${API_BASE}/tasks`, { title: newTitle.trim() });
      setTasks(prev => [...prev, res.data]);
      setNewTitle('');
    } catch {
      alert('Failed to add task');
    }
  };

  const toggleTask = async (id) => {
    try {
      const res = await axios.patch(`${API_BASE}/tasks/${id}/toggle`);
      setTasks(prev => prev.map(t => (t.id === id ? res.data : t)));
    } catch {
      alert('Failed to toggle task');
    }
  };

  const handleIncrement = () => {
    setCount(c => c + 1);
    setBump(true);
    setTimeout(() => setBump(false), 200);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="app">
        <div className="header">
          <h1>React + Express Lab</h1>
          <div className="api-badge">
            <div className={`dot ${apiOnline ? '' : 'offline'}`} />
            {apiMessage || 'Connecting to API...'}
          </div>
        </div>

        {/* Counter */}
        <div className="card">
          <div className="card-title"><span>01</span> Counter — Frontend Only</div>
          <div className={`counter-display ${bump ? 'bump' : ''}`}>{String(count).padStart(2, '0')}</div>
          <div className="counter-btns">
            <button className="btn btn-primary" onClick={handleIncrement}>+ Increment</button>
            <button className="btn btn-ghost" onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>

        {/* Tasks */}
        <div className="card">
          <div className="card-title"><span>02</span> Tasks — Powered by API</div>

          <form className="task-form" onSubmit={addTask}>
            <input
              className="task-input"
              type="text"
              placeholder="Add a new task..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Add</button>
          </form>

          <div className="reload-row">
            <button className="btn btn-ghost btn-sm" onClick={loadTasks} disabled={loading}>
              {loading ? 'Loading...' : '↻ Reload'}
            </button>
          </div>

          <ul className="task-list">
            {tasks.map((t, i) => (
              <li
                key={t.id}
                className={`task-item ${t.done ? 'done' : ''}`}
                style={{ animationDelay: `${i * 0.06}s` }}
                onClick={() => toggleTask(t.id)}
              >
                <div className="task-checkbox">
                  <span className="checkmark">✓</span>
                </div>
                <span className="task-text">{t.title}</span>
              </li>
            ))}
            {tasks.length === 0 && !loading && (
              <div className="empty-state">No tasks yet — add one above!</div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}