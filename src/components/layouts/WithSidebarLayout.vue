<template>
  <div>
    <Header/>
    <div class="row">
      <div class="col-md-3">
        <Sidebar/>
      </div>
      <div class="col-md-8">
        <slot/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default {
  name: 'with-sidebar-layout',
  components: {Footer, Sidebar, Header}
}
</script>
