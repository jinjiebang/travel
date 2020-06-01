<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list
      :cities="cities"
      :hot="hotCities"
      :city="city"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>
<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
import axios from "@/utils/request.js";

export default {
  name: "City",
  data() {
    return {
      city: "",
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  methods: {
    async getCityInfo() {
      const { data: res } = await axios.get("city.json");
      console.log(res);
      if (res.ret && res.data) {
        const { data } = res;
        this.city = data.city;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLetterChange(value) {
      this.letter = value;
    }
  },
  mounted() {
    this.getCityInfo();
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
};
</script>
<style lang="scss" scoped></style>
