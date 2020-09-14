<template>
  <div>
    <b-row class="my-1" :class="{column_style: !productCartPosition.vertical}">
      <b-col :sm="productCartPosition.bigImg" class="left_content">
        <VueSlickCarousel ref="c1" v-bind="topSliderOptions" @beforeChange="syncSliders">
          <div v-for="(image, i) in images" :key="i">
            <img :src="image.url" :alt="image.alt" />
          </div>
        </VueSlickCarousel>
      </b-col>
      <b-col
        :sm="productCartPosition.miniImg"
        class="right_content"
        :class="{column_style: !productCartPosition.vertical}"
      >
        <VueSlickCarousel
          ref="c2"
          v-bind="bottomSliderOptions"
          @beforeChange="syncSliders"
          :vertical="productCartPosition.vertical"
        >
          <div v-for="(image, i) in images" :key="i">
            <div :class="{verticalMargin: !productCartPosition.vertical}">
              <img :src="image.url" :alt="image.alt" />
            </div>
          </div>
        </VueSlickCarousel>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  props: ["productCartPosition"],
  components: { VueSlickCarousel },
  created() {},
  mounted() {},
  methods: {
    syncSliders(currentPosition, nextPosition) {
      this.$refs.c1.next();
      this.$refs.c2.next();
    }
  },
  data() {
    return {
      componentKey: 0,
      topSliderOptions: {
        slidesToShow: 1,
        asNavFor: this.$refs.c2,
        focusOnSelect: true,
        dots: false,
        fade: true,
        infinite: true,
        speed: 500
      },
      bottomSliderOptions: {
        asNavFor: this.$refs.c1,
        slidesToShow: 5,
        focusOnSelect: true,
        dots: false,
        arrow: false,
        infinite: true
      },

      images: [
        {
          url: "https://picsum.photos/1024/480/?image=11",
          alt: "I love you nature"
        },
        {
          url: "https://picsum.photos/1024/480/?image=12",
          alt: "Now with dog - Rosé"
        },
        {
          url: "https://picsum.photos/1024/480/?image=13",
          alt: "Jeg er i Danmark"
        },
        {
          url: "https://picsum.photos/1024/480/?image=14",
          alt: "Badabimbadabum"
        },
        {
          url: "https://picsum.photos/1024/480/?image=15",
          alt: "Goodmorning el mundo"
        },
        {
          url: "https://picsum.photos/1024/480/?image=16",
          alt: "My white and rosé with paella"
        },
        { url: "https://picsum.photos/1024/480/?image=17", alt: "Hopla" },
        {
          url: "https://picsum.photos/1024/480/?image=18",
          alt: "Watering by night"
        },
        {
          url: "https://picsum.photos/1024/480/?image=19",
          alt: "Life aint so bad at all..."
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
img {
  // height: 40px;
  width: 100%;
}
.right_content {
  & img {
    margin-top: 5px;
  }
}
.verticalMargin {
  margin: 0 3px;
}
.column_style {
  display: flex;
  flex-direction: column;
}
</style>