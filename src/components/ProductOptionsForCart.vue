<template>
  <div class="options_wrapper">
    <div v-for="(item, i) in 3" :key="i" class="radio">
      <input :checked="i == 0" class="custom-radio" type="radio" :id="`color${i}`" name="color" value="indigo" />
      <label :for="`color${i}`">
        <img
          class="img_label"
          src="https://prime-wood.ru/image/cache/catalog/colors/oreh_gvarneri-200x200.jpg.webp"
          alt
        />
        <div class="content_img">
          <div class="content_img_wrap">
            <img
              src="https://prime-wood.ru/image/cache/catalog/colors/oreh_gvarneri-200x200.jpg.webp"
              alt
            />
          </div>
          <div>some text</div>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.custom-radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-radio + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  position: relative;
  border-radius: 100%;
  margin: 5px;
  &:hover {
    & .content_img {
      opacity: 1;
      display: block;
    }
  }
  & .content_img {
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: -115px;
    left: 50%;
    width: 100px;
    height: 100px;
    transform: translateX(-50%);
    padding: 5px;
    text-align: center;
    opacity: 0;
    display: none;
    &:after {
      content: "";
      width: 14px;
      height: 14px;
      position: absolute;
      left: 50%;
      bottom: -12px;
      background: #fff;
      z-index: -23;
      transform: rotate(45deg) translateX(-50%);
      box-shadow: 2px 3px 5px #00000036;
    }

    & .content_img_wrap {
      height: 70%;
      width: 100%;
      overflow: hidden;
      & img {
        width: 100%;
        border-radius: 0;
      }
    }
  }
  & img.img_label {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 85%;
    border-radius: 100%;
    transform: translate(-50%, -50%);
  }
}

.custom-radio + label::before {
  content: "";
  display: inline-block;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  border: 3px solid #888;
  background: #888;
}

.custom-radio:not(:disabled):not(:checked) + label:hover::before {
  border-color: #b3d7ff;
}

.custom-radio:not(:disabled):active + label::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}
.custom-radio:checked + label::before {
  border-color: #ff9e24;
  background-color: #ff9e24;
  //   background-image: url("https://prime-wood.ru/image/cache/catalog/colors/color_1-200x200.jpg.webp");
}

.custom-radio:disabled + label::before {
  background-color: #e9ecef;
}
.options {
  &_tooltips {
    height: 50px;
    width: 50px;
    border: 1px solid #888;
    border-radius: 100%;
    margin: 5px;
    &:hover {
      border-color: red;
      cursor: pointer;
    }
  }
  &_wrapper {
    display: flex;
    margin-top: 15px;
  }
}
</style>