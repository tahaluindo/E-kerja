<template>
  <div>
    <div class="myCard">
      <input type="checkbox" id="card1" class="more" aria-hidden="true" />
      <div class="content">
        <div class="front" style="">
          <div class="inner">
            <div class="container">
              <div class="row">
                <div class="col-sm-6">
                  <div class="container">
                    <img src="@/assets/garuda-emas.png" alt="">
                    <br>
                    <br>
                    <p>{{ nomorKarisKarsu }}</p>
                  </div>
                </div>
                <div class="col-sm-6">dsa</div>
              </div>
            </div>
            <!-- <label for="card1" class="button" aria-hidden="true">
              Details
            </label> -->
          </div>
        </div>
        <div class="back">
          <div class="inner">
            <div class="info">
              <span>5</span>
              <div class="icon">
                <i class="fas fa-users"></i>
                <span>people</span>
              </div>
            </div>
            <div class="info">
              <span>4</span>
              <div class="icon">
                <i class="fas fa-door-open"></i>
                <span>rooms</span>
              </div>
            </div>
            <div class="info">
              <span>3</span>
              <div class="icon">
                <i class="fas fa-bed"></i>
                <span>beds</span>
              </div>
            </div>
            <div class="info">
              <span>1</span>
              <div class="icon">
                <i class="fas fa-bath"></i>
                <span>bath</span>
              </div>
            </div>
            <div class="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
                accusamus.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptates earum nostrum ipsam ullam, reiciendis nam
                consectetur? Doloribus voluptate architecto possimus perferendis
                tenetur nemo amet temporibus, enim soluta nam, debitis.
              </p>
            </div>
            <div class="location">Warsaw, Poland</div>
            <div class="price">38€ / day</div>
            <label for="card1" class="button return" aria-hidden="true">
              <i class="fas fa-arrow-left"></i>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nomorKarisKarsu: String
  }
}
</script>

<style lang="less" scoped>
@accent-color: #355cc9;
.container {
  text-align: center;
  img {
    width: 50%;
  }
}
.myCard {
  width: 420px * 1.25;
  height: 340px * 0.85;
  margin: 1em;
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.75, 0, 0.85, 1);
  }
}

.more {
  display: none;

  &:checked ~ .content {
    transform: rotateY(180deg);
  }
}

// .content {
//   &::after {
//     content: "";
//     width: 80%;
//     height: 80%;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     &:hover {
//       transform: rotateY(180deg);
//     }
//   }
//   &:hover {
//     transform: rotateY(180deg);
//   }
// }

.front {
  .inner {
    padding: 20px 0px;
  }
}

.front,
.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  .inner {
    height: 100%;
    transform: translateZ(80px) scale(0.94);
  }
}

.front {
  &:after {
    content: "BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN BKN";
    text-align: center;
    color: #b1d8b0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    backface-visibility: hidden;
    background: #79b877;
    font-size: 8px;
    overflow: hidden;
  }

  h2 {
    grid-row: 2;
    margin-bottom: 0.3em;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #fff;
    font-weight: 500;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  }

  .rating {
    grid-row: 3;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    display: flex;
    flex-flow: row nowrap;
    i {
      margin: 0 1px;
    }
  }
}

.back {
  transform: rotateY(180deg);
  background-color: #fff;
  border: 2px solid rgb(240, 240, 240);

  .info {
    position: relative;
    display: flex;
    align-items: center;
    color: @accent-color;
    grid-row: 3;
    &:not(:first-of-type):before {
      content: "";
      position: absolute;
      left: -0.9em;
      height: 18px;
      width: 1px;
      background-color: #ccc;
    }
    span {
      font-size: 2em;
      font-weight: 700;
    }
    i {
      &:before {
        background: linear-gradient(40deg, @accent-color, rgb(67, 138, 243));

        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
      font-size: 1.2em;
    }
    .icon {
      margin-left: 0.3em;
      span {
        display: block;
        margin-top: -0.25em;
        font-size: 0.8em;
        font-weight: 600;
        white-space: nowrap;
      }
    }
  }

  .description {
    grid-row: 5;
    grid-column: 1/-1;
    font-size: 0.86em;
    font-weight: 600;
    line-height: 1.4em;
    overflow: auto;
    color: @accent-color;
  }

  .location,
  .price {
    font-weight: 600;
    color: @accent-color;
    grid-row: 1;
    font-size: 0.86em;
  }

  .location {
    grid-column: 1/3;
    justify-self: left;
  }

  .price {
    grid-column: 3/-1;
    justify-self: right;
  }

  .button {
    grid-column: 1/-1;
    justify-self: center;
  }
}

.button {
  grid-row: -1;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  height: 3em;
  line-height: 2.9em;
  min-width: 3em;
  background-color: transparent;
  border: solid 2px #fff;
  color: #fff;
  text-align: center;
  left: 50%;
  backface-visibility: hidden;
  transition: 0.3s ease-in-out;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #fff;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
    text-shadow: none;
    color: @accent-color;
  }

  &.return {
    line-height: 3em;
    color: @accent-color;
    border-color: @accent-color;
    text-shadow: none;
    &:hover {
      background-color: @accent-color;
      color: #fff;
      box-shadow: none;
    }
  }
}

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: lighten(@accent-color, 20%);
}
::-webkit-scrollbar-thumb:hover {
  background: @accent-color;
}
</style>
