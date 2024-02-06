<template>
  <div class="col-span-5 lg:col-span-1 md:col-span-4">
    <a href="https://www.instagram.com/drinksoda__/" target="_blank" rel="noopener noreferrer">
      <img
        class="lg:px-5 md:px-5 md:pt-10 lg:pt-10 w-full lg:col-start-1 col-start-3"
        :src="gifSrc"
        alt="Drink Soda Strapped"
      >
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desktopGif: "../assets/ds-t-pc.gif",
      mobileGif: "../assets/ds-t.gif"
    };
  },
  computed: {
    gifSrc() {
      return this.isMobile ? this.mobileGif : this.desktopGif;
    },
    isMobile() {
      return window.innerWidth < 768; // Adjust breakpoint as needed
    }
  }
};
</script>
