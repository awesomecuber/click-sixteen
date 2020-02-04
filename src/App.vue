<template>
  <div id="app">
    <div
      class="w-screen h-screen bg-blue-200 mx-auto flex flex-col items-center justify-around"
    >
      <div class="w-full">
        <div
          v-if="started"
          class="text-5xl w-full flex flex-col sm:flex-row items-center sm:items-start justify-around"
        >
          <p>
            Current: <b>{{ cur === 17 ? "DONE" : cur }}</b>
          </p>
          <p>
            Time: <b>{{ (time / 100).toFixed(2) + "s" }}</b>
          </p>
        </div>
        <div
          v-else
          class="text-5xl w-full flex flex-col sm:flex-row items-center sm:items-start justify-around"
        >
          <p>Click Sixteen</p>
          <p>
            Last Time:
            <b>{{
              lastTime === 0 ? "N/A" : (lastTime / 100).toFixed(2) + "s"
            }}</b>
          </p>
        </div>
      </div>
      <div class="m-5 flex-1 w-11/12 md:w-3/4 border border-gray-700">
        <div v-if="started" class="h-full flex flex-wrap items-stretch">
          <div v-for="num in nums" :key="num" class="w-1/4 h-1/4">
            <button
              @click="increment(num)"
              class="w-full h-full border-2 border-gray-700 bg-gray-300 text-6xl"
            >
              {{ num }}
            </button>
          </div>
        </div>
        <div v-else class="w-full h-full">
          <button
            @click="start"
            class="w-full h-full border border-gray-700 bg-gray-400"
          >
            <p class="text-6xl">
              START
            </p>
            <p class="text-2xl text-gray-700">
              Click all the numbers from 1 to 16
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
  data: () => {
    return {
      nums: [],
      started: false,
      cur: 1,
      time: 0,
      timer: null,
      lastTime: 0
    };
  },
  created() {
    const nums = [];
    for (let i = 1; i <= 16; i++) {
      nums.push(i);
    }
    this.randomize(nums);
    this.nums = nums;
  },
  methods: {
    start() {
      this.started = true;

      this.timer = setInterval(() => {
        this.time += 1;
      }, 10);
    },
    increment(num) {
      if (num === this.cur) {
        this.cur += 1;
      }
      if (this.cur === 17) {
        clearTimeout(this.timer);
        this.started = false;
        this.lastTime = this.time;
        this.time = 0;
        this.cur = 1;
        this.randomize(this.nums);
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
