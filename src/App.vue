<template>
  <div>
    <Header />
    <Hero />
    <Companies />
    <Jobs />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Companies from './components/Companies.vue';
import Jobs from './components/Jobs.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Hero,
    Companies,
    Jobs,
    Footer,
  }
}
</script>
