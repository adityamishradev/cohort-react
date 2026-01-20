import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);

  /* ADD ITEM */
  const addItem = async () => {
    await axios.post("http://localhost:5000/api/items/add", {
      name,
      category
    });
    setName("");
    setCategory("");
  };

  /* SEARCH */
  useEffect(() => {
    if (search === "") return;

    axios
      .get(`http://localhost:5000/api/items/search?q=${search}`)
      .then(res => setItems(res.data));
  }, [search]);

  return (
    <>
      <h2>Add Item</h2>
      <input
        placeholder="Item name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />
      <button onClick={addItem}>Add</button>

      <hr />

      <h2>Search Item</h2>
      <input
        placeholder="Search..."
        onChange={e => setSearch(e.target.value)}
      />

      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </>
  );
}
