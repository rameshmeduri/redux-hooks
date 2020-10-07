const loadFoodData = async function () {
  const res = await fetch('/food-menu.json');
  if (!res.ok) {
    throw new Error('API failed');
  }
  const data = await res.json();
  return data;
};

export default loadFoodData;

