<template lang="pug">
#app
  #everything(class="w-screen h-screen bg-blue-200 mx-auto flex flex-col items-center justify-around")
    #topbar(class="w-full")
      #topbarstarted(
        v-if="started"
        class="text-5xl w-full flex flex-col sm:flex-row items-center sm:items-start justify-around"
      )
        p Current: <b>{{ cur }}</b>
        p Time: <b>{{ (time / 100).toFixed(2) + "s" }}</b>
      #topbarnotstarted(
        v-else
        class="text-5xl w-full flex flex-col sm:flex-row items-center sm:items-start justify-around"
      )
        p Click Sixteen
        p Last Time: <b>{{ lastTime === 0 ? "N/A" : (lastTime / 100).toFixed(2) + "s" }}</b>

    #playarea(class="m-5 flex-1 w-11/12 md:w-3/4 border border-gray-700")
      #playareastarted(v-if="started" class="h-full flex flex-wrap items-stretch")
        #buttons(v-for="num in nums" :key="num" :class="buttonSize")
          NumberButton(:num="num" :colored="colored" :penalty="penalty" @increment="increment(num)")
      #playareanotstarted(v-else class="w-full h-full")
        #optionsbuttons(class="flex flex-col w-full h-full")
          button(
            @click="startColor()"
            class="w-full h-full border border-gray-700 bg-gray-400"
          )
            p(class="text-5xl font-bold") START COLOR
            p(class="text-2xl text-gray-700") Click all the colors from red to purple!
          button(
            v-for="num in [3, 4, 5]"
            @click="start(num)"
            class="w-full h-full border border-gray-700 bg-gray-400"
          )
            p(class="text-5xl font-bold") START {{ num * num }}
            p(class="text-2xl text-gray-700") Click all the numbers from 1 to {{ num * num }}
</template>

<script>
import NumberButton from "./components/NumberButton.vue";

export default {
  name: "Game",
  components: {
    NumberButton
  },
  data: () => {
    return {
      nums: [],
      size: 0,
      colored: false,
      started: false,
      cur: 1,
      time: 0,
      timer: null,
      lastTime: 0,
      penalty: false,
      penaltyTimer: 75
    };
  },
  computed: {
    buttonSize: function() {
      return `w-1/${this.size} h-1/${this.size}`;
    }
  },
  methods: {
    start(num) {
      let nums = [];
      for (let i = 1; i < num * num + 1; i++) {
        nums.push(i);
      }
      this.randomize(nums);
      this.nums = nums;

      this.size = num;
      this.colored = false;

      this.started = true;

      let penaltyTimer = this.penaltyTimer;
      this.timer = setInterval(() => {
        this.time += 1;
        if (this.penalty) {
          penaltyTimer -= 1;
          if (penaltyTimer === 0) {
            this.penalty = false;
            penaltyTimer = this.penaltyTimer;
          }
        }
      }, 10);
    },
    startColor() {
      this.start(3);
      this.colored = true;
    },
    increment(num) {
      if (num === this.cur) {
        this.cur += 1;

        if (this.cur > this.size * this.size) {
          clearTimeout(this.timer);
          this.started = false;
          this.lastTime = this.time;
          this.time = 0;
          this.cur = 1;
        }
      } else {
        this.penalty = true;
      }
    },
    randomize(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
};
</script>
