var auth = {
    async getMe() {
      const res = await fetch("{{apiUrl}}/auth/me", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          Origin: "http://localhost:8000",
        },
      });
  
      const result = await res.json();
      if (result?.success == false) return false
      return result;
    },
    async logout() {
      const res = await fetch("{{apiUrl}}/auth/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
          Origin: "http://localhost:8000",
        },
      });
  
      const result = await res.json();
      if (result?.success == false) return false
      return result;
    },
  }
  
  export default auth
  