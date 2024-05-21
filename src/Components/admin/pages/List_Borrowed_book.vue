<template>
    <div>
        <Header/>
        <div id="layoutSidenav">
            <LeftSidebar />
            <div id="layoutSidenav_content">
                <h1>hi</h1>
            </div>
        </div>
        <Footer />
    </div>
</template>
    
    
    
      <script>
      import Header from '../Header.vue'
      import Footer from '../Footer.vue'
      import LeftSidebar from '../LeftSidebar.vue'
        import ContentLayout from '../ContentLayout.vue'
      
      export default {
        components: {
          Header,
          Footer,
          LeftSidebar,
         ContentLayout
        }
      }
      </script>
      <style></style>