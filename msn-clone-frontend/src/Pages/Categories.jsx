import React from "react";

const Categories = () => {
  const categoryList = [
    { name: "Technology", description: "Latest in AI, gadgets, and tech startups" },
    { name: "Health", description: "Wellness, medicine, and healthy living tips" },
    { name: "Sports", description: "Live updates and analysis on cricket, football, etc." },
    { name: "Politics", description: "Local and international political developments" },
    { name: "Entertainment", description: "Movies, shows, celebrity gossip & more" },
    { name: "Business", description: "Stock market, economy, and finance trends" },
  ];

  return (
    <div className="row">
      <h2 className="mb-4">News Categories</h2>
      {categoryList.map((cat, idx) => (
        <div className="col-md-4 mb-3" key={idx}>
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{cat.name}</h5>
              <p className="card-text">{cat.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;



