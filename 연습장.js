const fetch = require("node-fetch");

const getUserName = async (id) => {
  try {
    const res = await fetch(`http~~~~~~~~/${id}`);
    const { name } = await res.json();
    console.log(name);
  } catch (error) {
    console.error(error);
  }
};
getUserName("bigyou");
