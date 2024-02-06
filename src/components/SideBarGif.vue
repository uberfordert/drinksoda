<template>
  <div class="col-span-5 lg:col-span-1 md:col-span-4">
    <a href="https://www.instagram.com/drinksoda__/" target="_blank" rel="noopener noreferrer">
      <img
        class="lg:px-5 md:px-5 md:pt-10 lg:pt-10 w-full lg:col-start-1 col-start-3"
        id="sodaGif"
        alt="Drink Soda Strapped"
      >
    </a>
  </div>
</template>

<script>
export default {
  mounted() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const imgElement = document.getElementById('sodaGif');

    if (isMobile) {
      imgElement.src = "../assets/ds-t.gif";
    } else {
      imgElement.src = "../assets/ds-t-pc.gif";
    }
  }
}
</script>
