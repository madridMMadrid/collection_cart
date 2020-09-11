<template>
  <div>
    <div>
      <div class="container_product_tabs">
        <div class="row">
          <div class="col-sm-12">
            <div class="wrapperSelect">
              <div class="list_category">
                <div class="checkbox" v-for="(value, index) in categories" :key="index">
                  <input
                    class="custom-checkbox"
                    type="radio"
                    :id="'color'+index"
                    name="color"
                    :value="value.id"
                    v-model="selectCategory"
                  />
                  <label :for="'color'+index">{{value.category}}</label>
                </div>
              </div>
              <!-- <div class="__select" :data-state="activeValueBrand" @click="openSelectBrand()">
                <div class="__select__title" data-default="Option 0">{{ selectBrandName }}</div>
                <div class="__select__content">
                  <input
                    id="singleSelectbrands0"
                    class="__select__input"
                    type="radio"
                    name="singleSelect"
                    checked
                  />
                  <template v-for="(brand, index) in brands">
                    <input
                      :id="'singleSelectbrands0'+index"
                      class="__select__input"
                      type="radio"
                      name="singleSelect"
                      :key="'singleSelectbrands0'+index"
                      :value="brand.brand"
                      v-model="selectBrand"
                    />
                    <label
                      :key="'singleSelectbrands1'+index"
                      :for="'singleSelectbrands0'+index"
                      class="__select__label"
                      @click="activeValueCheckBrand(index)"
                    >{{brand.brand}}</label>
                  </template>
                </div>
              </div>-->

              <div class="buttom_sort">
                <span>Сортировать:</span>
                <div class="__select" :data-state="activeValueOptions" @click="openSelectOptions()">
                  <div class="__select__title" data-default="Option 0">{{ selectOptionsName }}</div>
                  <div class="__select__content">
                    <input
                      id="singleSelectOptions0"
                      class="__select__input"
                      type="radio"
                      name="singleSelect"
                      checked
                    />
                    <template v-for="(rule, index) in sortRules">
                      <input
                        :id="'singleSelectOptions0'+index"
                        class="__select__input"
                        type="radio"
                        name="singleSelect"
                        :key="'singleSelectOptions0'+index"
                        :value="rule.key"
                        v-model="selectOptions"
                      />
                      <label
                        :key="'singleSelectOptions1'+index"
                        :for="'singleSelectOptions0'+index"
                        class="__select__label"
                        @click="activeValueCheckOptions(rule.key)"
                      >{{rule.title}}</label>
                    </template>
                  </div>
                </div>
              </div>
              <!-- <input
                class="input-search"
                v-model.trim="inputSearch"
                type="text"
                placeholder="Поиск по названию товара"
              />-->
            </div>

            <!-- <label>Фильтр по цене</label>
            <input v-model.number="minPrice" type="number" />
            <input v-model.number="maxPrice" type="number" />-->

            <!-- <button @click="clear" class="primary small">Сбросить фильтры</button> -->
            <div class="tab-content product-list">
              <div class="product-card" v-for="product in filteredProducts" :key="product.good_id">
                <a class="product-card-link" :href="product.href">
                  <div class="product-card-title">{{ product.name }}</div>
                  <div class="product-card-image-wrapper">
                    <img class="product-card-image" :src="product.thumb" />
                  </div>
                </a>
                <div class="product-card-scale">
                  <div class="product-card-scale-size">{{ product.proportions.length }} см</div>
                  <div class="product-card-scale-size">{{ product.proportions.width }} см</div>
                  <div class="product-card-scale-size">{{ product.proportions.height }} см</div>
                </div>
                <div class="product-card-info">
                  <div class="product-card-info-text green product-key">Код товара {{ product.sku }}</div>
                  <div class="product-card-info-text green product-id">ID {{ product.product_id }}</div>
                  <div class="product-card-info-text black">
                    Срок доставки {{ product.delivery_days.min }}-{{ product.delivery_days.max }} дней
                    <a
                      class="item__compare"
                      href
                    ></a>
                  </div>
                </div>
                <div class="product-card-buy">
                  <div class="product-card-buy-price">
                    <span
                      class="product-card-buy-price-text"
                    >{{ (Number(product.price).toFixed()).toString().replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1") }}</span>
                    <sup class="product-card-buy-price-currency">руб</sup>
                  </div>
                  <PlusMinus />
                  <button class="product-card-buy-button button-global button-primary-yellow"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import PlusMinus from "./PlusMinus";
import { log } from "util";

export default {
  name: "selectName",
  components: {
    PlusMinus,
  },
  data() {
    return {
      products: [
        {
          good_id: 12,
          good: "Пуфик ASUS",
          category_id: 3,
          brand: "Asus",
          price: 2000,
          rating: 8,
          photo: "asus_video.jpg",
        },
        {
          good_id: 13,
          good: "Пуфик GIGABYTE GT-740",
          category_id: 3,
          brand: "Gigabyte",
          price: 6000,
          rating: 9,
          photo: "gigabyte_video_gt740.jpg",
        },
        {
          good_id: 10,
          good: "Стулья Lenovo A5000",
          category_id: 2,
          brand: "Lenovo",
          price: 11000,
          rating: 3,
          photo: "lenovo_a5000.jpg",
        },
        {
          good_id: 9,
          good: "Стулья Asus Zenfone Laser",
          category_id: 2,
          brand: "Asus",
          price: 12000,
          rating: 6,
          photo: "asus_zenfone_laser.jpg",
        },
        {
          good_id: 14,
          good: "Пуфик GIGABYTE GTX-960",
          category_id: 3,
          brand: "Gigabyte",
          price: 14000,
          rating: 10,
          photo: "gigabyte_video_gtx960.jpg",
        },
        {
          good_id: 4,
          good: "Стол Lenovo G5030",
          category_id: 1,
          brand: "Lenovo",
          price: 16000,
          rating: 7,
          photo: "lenovo_g5030.jpg",
        },
        {
          good_id: 11,
          good: "Стулья Lenovo P90",
          category_id: 2,
          brand: "Lenovo",
          price: 16000,
          rating: 5,
          photo: "lenovo_p90.jpg",
        },
        {
          good_id: 3,
          good: "Стол Lenovo IdeaPad",
          category_id: 1,
          brand: "Lenovo",
          price: 17000,
          rating: 5,
          photo: "lenovo_idea_pad.jpg",
        },
        {
          good_id: 7,
          good: "Стулья Samsung Galaxy A5",
          category_id: 2,
          brand: "Samsung",
          price: 17000,
          rating: 8,
          photo: "samsung_galaxy_a5.jpg",
        },
        {
          good_id: 5,
          good: "Стол Acer Aspire",
          category_id: 1,
          brand: "Acer",
          price: 21000,
          rating: 8,
          photo: "acer_aspire.jpg",
        },
        {
          good_id: 6,
          good: "Стулья Samsung Galaxy A7",
          category_id: 2,
          brand: "Samsung",
          price: 30000,
          rating: 9,
          photo: "samsung_galaxy_a7.jpg",
        },
        {
          good_id: 8,
          good: "Стулья Apple iPhone SE",
          category_id: 2,
          brand: "Apple",
          price: 38000,
          rating: 10,
          photo: "apple_iphone_se.jpg",
        },
        {
          good_id: 1,
          good: "Стол Apple MacBook Air",
          category_id: 1,
          brand: "Apple",
          price: 60000,
          rating: 8,
          photo: "apple_macbook_air.jpg",
        },
        {
          good_id: 2,
          good: "Стол Apple MacBook Pro",
          category_id: 1,
          brand: "Apple",
          price: 70000,
          rating: 9,
          photo: "apple_macbook_pro.jpg",
        },
      ],
      categories: [
        { id: 0, category: "Все категории" },
        { id: 33, category: "Столы" },
        { id: 23, category: "Переговорные столы" },
        { id: 3, category: "Бенч-системы" },
        { id: 34, category: "Тумбы" },
        { id: 4, category: "Брифинг и приставки" },
        { id: 41, category: "Шкафы" },
        { id: 44, category: "Экраны" },
        { id: 1, category: "Аксессуары" },
      ],
      brands: [
        {
          id: 0,
          brand: "Все бренды",
        },
        {
          id: 1,
          brand: "Apple",
        },
        {
          id: 2,
          brand: "Samsung",
        },
        {
          id: 3,
          brand: "Acer",
        },
        {
          id: 4,
          brand: "Lenovo",
        },
        {
          id: 5,
          brand: "Asus",
        },
        {
          id: 6,
          brand: "Gigabyte",
        },
      ],
      sortRules: [
        { key: "good_id:asc", title: "По порядку" },
        // { key: "rating:desc", title: "По рейтингу" },
        { key: "price:asc", title: "Сначала дешевые" },
        { key: "price:desc", title: "Сначала дорогие" },
      ],
      inputSearch: "",
      selectCategory: 0,
      selectCategoryName: "Все категории",
      selectBrand: "Все бренды",
      minPrice: 0,
      maxPrice: 100000,
      selectSort: "good_id:asc",

      activeValue: "",
      optionsValue: "",
      selectedValue: "Все категории",
      selectOptions: "",

      activeValueBrand: "",
      selectBrandName: "Все бренды",

      activeValueOptions: "",
      selectOptionsName: "По порядку",
    };
  },
  computed: {
    ...mapGetters("products", ["getProducts"]),
    filteredProducts() {
      // Фильтруем товары
      var filtered = this.getProducts
        // По категории
        .filter((product) => {
          return (
            this.selectCategory == 0 || product.group_id == this.selectCategory
          );
        })

        // По брендам
        .filter((product) => {
          return (
            this.selectBrand == "Все бренды" ||
            product.brand == this.selectBrand
          );
        })

        // По ценам
        .filter((product) => {
          return (
            Number(product.price) >= this.minPrice &&
            Number(product.price) <= this.maxPrice
          );
        })

        // По полю поиска
        .filter((product) => {
          return (
            this.inputSearch == "" ||
            product.name
              .toLowerCase()
              .indexOf(this.inputSearch.toLowerCase()) !== -1
          );
        });

      // Сортируем
      var sorted = _.sortBy(filtered, (product) => {
        return Number(product[this.sortKey]);
      });

      // При необходимости сортируем в обратном направлении
      if (this.sortDir === "desc") {
        sorted = sorted.reverse();
      }

      return sorted;
    },
    sortKey: function () {
      return this.selectSort.split(":")[0];
    },
    sortDir: function () {
      return this.selectSort.split(":")[1];
    },
  },
  mounted() {},
  methods: {
    activeValueCheck(index) {
      let id = this.categories.find((x) => x.id == index).category;
      this.selectCategoryName = id;
      this.activeValue = "";
    },
    activeValueCheckBrand(index) {
      let id = this.brands.find((x) => x.id == index).brand;
      this.selectBrandName = id;
      this.activeValueBrand = "";
    },
    activeValueCheckOptions(index) {
      let id = this.sortRules.find((x) => x.key == index).title;
      this.selectOptionsName = id;
      this.activeValueOptions = "";
      this.selectSort = index;
    },

    openSelect(e) {
      console.log(e);
      if (!this.activeValue) {
        this.activeValue = "active";
      } else {
        this.activeValue = "";
      }
    },
    openSelectBrand() {
      if (!this.activeValueBrand) {
        this.activeValueBrand = "activeValueBrand";
      } else {
        this.activeValueBrand = "";
      }
    },
    openSelectOptions(e) {
      if (!this.activeValueOptions) {
        this.activeValueOptions = "activeValueOptions";
      } else {
        this.activeValueOptions = "";
      }
    },

    getMinPrice: function () {
      return Number(_.minBy(this.products, "price").price);
    },
    getMaxPrice: function () {
      return Number(_.maxBy(this.products, "price").price);
    },
    clear() {
      this.inputSearch = "";
      this.selectCategory = 0;
      this.selectCategoryName = "Все категории";
      this.selectBrand = "Все бренды";
      this.selectBrandName = "Все бренды";
      this.minPrice = this.getMinPrice();
      this.maxPrice = this.getMaxPrice();
      this.selectSort = "good_id:asc";
    },
  },
};
</script>
<style lang="scss" scoped>
/* для элемента input c type="checkbox" */
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

/* для элемента label, связанного с .custom-checkbox */
.custom-checkbox + label {
  display: flex;
  align-items: center;
  user-select: none;
  position: relative;
  outline: none !important;
  flex-direction: column;
  color: #b8ad87;
  max-width: 90px;
  text-align: center;
  
  &:hover {
    cursor: pointer;
  }
}
/* создание в label псевдоэлемента before со следующими стилями */
.custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  background-repeat: no-repeat;
  background-position: -118px 1px;
  background-image: url(https://prime-wood.ru/catalog/view/javascript/skin/images/icons.png);
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  margin-bottom: 10px;
}

/* стили при наведении курсора на checkbox */
.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
  /* border-color: #b3d7ff; */
  outline: 0;
  outline-offset: 0;
}
/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.custom-checkbox:focus:not(:checked) + label::before {
  border-color: #80bdff;
}

/* стили для чекбокса, находящегося в состоянии checked */
.custom-checkbox:checked + label::before {
  background-color: #fff;
  box-shadow: 1px 4px 4px 4px #5959596b;
  -webkit-filter: grayscale(1%);
  filter: grayscale(1%);
}
.custom-checkbox:checked + label::after {
  opacity: 1;
}
.tab-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 0px;

  .input-search {
    border: 1px solid #c7ccd1;
    border-radius: 5px;
    padding: 2px 16px;
  }
  .product {
    &-card {
      border: 1px solid #e2e0d3;
      box-shadow: 0 30px 7px -33px rgba(0, 0, 0, 0.9);
      width: 218px;
      margin: 0 0 25px 0px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &-link {
        color: #56504c;
        &:hover {
          color: #00a75f;
          text-decoration: none;
        }
      }
      &::before {
        content: "";
        border-top: 7px solid #e2e0d3;
        position: absolute;
        bottom: -7px;
        border-left: 40px solid transparent;
        left: 5px;
      }
      &::after {
        content: "";
        border-right: 40px solid transparent;
        right: 5px;
        border-top: 7px solid #e2e0d3;
        position: absolute;
        bottom: -7px;
        transition: all 0.2s ease;
      }

      &-scale {
        font-size: 13px;
        padding: 2px 10px;
        display: flex;
        justify-content: center;
        color: #858585;
      }
      &-info {
        font-size: 13px;
        padding-bottom: 12px;
        text-align: center;
        &-text {
          &.green {
            color: #00a75f;
            font-size: 12.5px;
          }
          &.black {
            display: flex;
            justify-content: center;
            & .item__compare {
              background: url("https://prime-wood.ru/catalog/view/javascript/skin/images/compare.svg")
                no-repeat 50% 50%;
              height: 17px;
              text-decoration: none;
              width: 17px;
              display: block;
              -webkit-filter: grayscale(100%);
              filter: grayscale(100%);
              margin-left: 5px;
              &:hover {
                -webkit-filter: grayscale(1%);
                filter: grayscale(1%);
              }
            }
          }
        }
      }
      &-title {
        line-height: 15px;
        font-size: 13 px;
        font-weight: 700;
        padding: 10px 5px;
        position: relative;
        text-align: center;
      }

      &-image {
        max-width: 100%;
        max-height: 100%;
        padding: 0 15px 10px;
        box-sizing: border-box;
        &-wrapper {
          height: 130px;
          border-bottom: 1px solid #e2e0d3;
          text-align: center;
        }
      }
      &-buy {
        display: flex;
        justify-content: space-around;
        background-color: #f9f8f3;
        overflow: hidden;
        padding: 9px 9px 9px 5px;
        align-items: center;
        &-button {
          background: #71c73b;
          border: none;
          height: 2rem;
          border-radius: 3px;
          width: 2rem;
          position: relative;
          &::before {
            content: "";
            background: url("https://prime-wood.ru/catalog/view/javascript/skin/images/icons.png")
              no-repeat 0 -80px;
            height: 20px;
            position: absolute;
            top: 5px;
            left: 5px;
            width: 20px;
          }
        }
        &-price {
          &-text {
            font-size: 25px;
          }
          &-currency {
            font-size: 13px;
            padding-left: 5px;
          }
        }

        &-price {
          display: flex;
          &-currency {
            line-height: inherit;
            top: 0;
          }
        }
        &.jc-sb {
          align-items: center;
        }
      }
    }
  }
}

.raz {
  all: unset;
  -moz-appearance: textfield;
  width: 3em;
  text-align: center;
}
.raz::-webkit-inner-spin-button {
  display: none;
}
.wrapperSelect {
  display: flex;
  flex-direction: column;
  .list_category {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    padding-left: -6px;
    border: 1px solid #e0e0e0;
    padding: 15px;
  }
}
.__select {
  width: auto;
  max-width: 230px;
  height: 26px;
  position: relative;
  &[data-state="active"],
  &[data-state="activeValueBrand"],
  &[data-state="activeValueOptions"] {
    .__select__title {
      &::before {
        transform: translate(-3px, -50%) rotate(-45deg);
      }

      &::after {
        transform: translate(3px, -50%) rotate(45deg);
      }
    }

    .__select__content {
      opacity: 1;
      visibility: visible;
    }

    .__select__label + .__select__input + .__select__label {
      max-height: 40px;
    }
  }
}
.__select__title {
  display: flex;
  align-items: center;
  width: auto;
  height: 100%;
  padding: 2px 35px 2px 16px;
  border-radius: 5px;
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    display: block;
    width: 10px;
    height: 2px;
    transition: all 0.3s ease-out;
    background-color: #333333;
    transform: translate(-3px, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(3px, -50%) rotate(-45deg);
  }

  &:hover {
    &::before,
    &::after {
    }
  }
}
.reset {
  display: flex;
  width: 230px;
  padding: 8px 16px;
  margin: 0 auto;
  margin-bottom: 10px;
  border: solid 1px #c7ccd1;
  border-radius: 5px;
  transition: all 0.2s ease-out;
  cursor: pointer;
  font-weight: bold;
  background-color: #ffffff;
  color: #333333;
  &:hover {
    color: #ff9e23;
  }
}
.__select__content {
  position: absolute;
  top: 26px;
  left: 3px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 6px);
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-out;
  opacity: 0;
  visibility: hidden;
  z-index: 9;
}
.__select__input {
  display: none;

  &:checked + label {
    background-color: #dedede;
  }
  &:disabled + label {
    opacity: 0.6;
    pointer-events: none;
  }
}
.__select__label {
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  padding: 0 16px;
  transition: all 0.2s ease-out;
  overflow: hidden;
  font-size: 13px;
  margin: 0;

  & + input + & {
    border-top: 0 solid #c7ccd160;
  }

  &:hover {
    color: #ff9e23;
  }
}
.buttom_sort {
  display: flex;
  align-items: center;
}
</style>