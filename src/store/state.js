let defaultCity = "北京";
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {
  console.warn("no localStorage");
}
export default {
  city: defaultCity
};
