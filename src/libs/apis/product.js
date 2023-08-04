var product = {
    async list() {
      const res = await fetch(`http://localhost:8000/api/main/product/lastest`);
  
      const result = await res.json();
      return result;
    },
}
  export default product
  