<template>
  <div>
    <Header/>
    <slot/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'default-layout',
  components: {Footer, Header}
}
</script>
