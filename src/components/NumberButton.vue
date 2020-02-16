<template lang="pug">
button(
  @click="$emit('increment')"
  class="w-full h-full border-2 text-6xl"
  :class="[penaltyStyle, buttonColor]"
)
  p(v-if="!colored") {{ num }}
</template>

<script>
export default {
  name: "NumberButton",
  props: {
    num: Number,
    colored: Boolean,
    penalty: Boolean
  },
  computed: {
    buttonColor: function() {
      if (!this.colored) {
        return "bg-gray-400";
      }
      switch (this.num) {
        case 1:
          return "bg-red-700";
        case 2:
          return "bg-red-400";
        case 3:
          return "bg-orange-400";
        case 4:
          return "bg-yellow-200";
        case 5:
          return "bg-green-200";
        case 6:
          return "bg-green-600";
        case 7:
          return "bg-teal-500";
        case 8:
          return "bg-blue-700";
        case 9:
          return "bg-purple-500";
      }
      return this.colored ? "bg-red-400" : "bg-gray-400";
    },
    penaltyStyle: function() {
      return this.penalty ? "border-red-700 text-red-500" : "border-gray-700";
    }
  }
};
</script>
