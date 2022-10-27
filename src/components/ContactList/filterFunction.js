function itemsFilter(items, value) {
  return items.filter(item =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );
}

export default itemsFilter;
