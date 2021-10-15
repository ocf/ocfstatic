<template>
  <div>
    <div class="staff-card-leadimg-container">
      <figure class="image is-4by3">
        <img :src="staffItem.face" class="staff-card-leadimg" />
      </figure>
    </div>
    <div class="staff-card-content">
      <img :src="staffItem.icon" class="staff-card-icon" />
      <div>
        <p class="subtitle is-6">@{{ staffItem.handle }}</p>
        <p class="title is-4">{{ staffItem.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StaffCard",
  props: {
    staffItem: Object
  }
};
</script>

<style lang="scss" scoped>
.staff-card-leadimg-container {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  border-radius: 0.25rem;
}
.staff-card-leadimg {
  object-fit: cover;
}
.staff-card-content {
  display: grid;
  grid-template-columns: 48px 1fr;
  padding: 1.5rem 0.25rem;
  gap: 0.75rem;
}
.staff-card-icon {
  object-fit: cover;
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  overflow: hidden;
}
</style>
