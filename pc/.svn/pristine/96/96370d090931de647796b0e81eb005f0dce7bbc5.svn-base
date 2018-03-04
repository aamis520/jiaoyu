<template>
    <span class="sk-check-item" :class="{checked:isChecked}" @click.stop="change(value)">
        <span class="text">{{value.name}}</span>
    </span>
</template>

<script>
export default {
  props: ["value"],
  data: function() {
    return {
      isChecked: this.value.is_check
    };
  },
  watch: {
    value() {
      this.isChecked = this.value.is_check;
    }
  },
  methods: {
    change: function(item) {
      this.isChecked = !this.isChecked;
      item.is_check = this.isChecked;
      this.$emit("check", item);
    }
  }
};
</script>