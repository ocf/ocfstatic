<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ card.name }}</p>
          <p class="subtitle is-6">@{{ card.handle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfficerCard",
  props: {
    card: Object
  }
};
</script>
