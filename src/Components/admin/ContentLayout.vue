<template>
                <main>
                <div class="container-fluid px-4">
                    <h1 class="mt-4">Dashboard</h1>
                    <ol class="breadcrumb mb-4">
                        <li class="breadcrumb-item active">Dashboard</li>
                    </ol>
                   <DashboardStatus/>

  
                </div>
            </main>
</template>
<script>
import DashboardStatus from './DashboardStatus.vue'

export default {
  components: {
    DashboardStatus,
  }
}
</script>
<style></style>