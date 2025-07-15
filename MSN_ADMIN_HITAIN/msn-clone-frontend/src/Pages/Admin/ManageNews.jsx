import React, { useState } from 'react';

const ManageNews = () => {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({ title: '', header: '', image: '', link: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setNews([...news, form]);
    setForm({ title: '', header: '', image: '', link: '' });
  };

  return (
    <div>
      <h3>📰 Manage News</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <input className="form-control mb-2" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input className="form-control mb-2" placeholder="Header" value={form.header} onChange={(e) => setForm({ ...form, header: e.target.value })} />
        <input className="form-control mb-2" placeholder="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
        <input className="form-control mb-2" placeholder="Link" value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} />
        <button className="btn btn-primary">Add News</button>
      </form>

      <ul className="list-group">
        {news.map((item, idx) => (
          <li key={idx} className="list-group-item">
            <strong>{item.title}</strong><br />
            <small>{item.header}</small><br />
            <img src={item.image} alt="" width="100" />
            <br />
            <a href={item.link} target="_blank">Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageNews;
