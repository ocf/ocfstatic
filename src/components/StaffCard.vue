<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="staffItem.face" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="staffItem.icon" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ staffItem.name }}</p>
          <p class="subtitle is-6">@{{ staffItem.handle }}</p>
        </div>
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
