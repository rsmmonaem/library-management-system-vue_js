<template>
    <div id="layoutSidenav_nav">
        <nav v-if="userType" :class="{'sb-sidenav': true, 'accordion': true, 'sb-sidenav-dark': true}">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <div class="sb-sidenav-menu-heading">
                        <router-link class="nav-link" :to="{ name: 'home' }">
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-tachometer-alt"></i>
                            </div>
                            Visit Site
                        </router-link>
                    </div>
                    <a v-if="userType === 'admin'" class="nav-link" href="/admin">
                        <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </a>
                    <a v-if="userType === 'member'" class="nav-link" href="/member">
                        <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </a>
                    <div class="sb-sidenav-menu-heading">Interface</div>
                    <template v-if="userType === 'admin'">
                        <router-link class="nav-link collapsed" :to="{ name: 'Add_Author' }">Add Author</router-link>
                        <router-link class="nav-link collapsed" :to="{ name: 'List_Author' }">List Author</router-link>
                    </template>
                    <router-link v-if="userType === 'admin'" class="nav-link collapsed" :to="{ name: 'Add_Book' }">Add Book</router-link>
                    <router-link v-if="userType === 'admin'" class="nav-link collapsed" :to="{ name: 'List_Book' }">List Book</router-link>
                    <router-link v-if="userType === 'admin'" class="nav-link collapsed" :to="{ name: 'List_Borrowed_book_admin' }">List Borrowed-book</router-link>
                    <router-link v-if="userType === 'member'" class="nav-link collapsed" :to="{ name: 'List_Borrowed_book' }">List Borrowed-book</router-link>
                </div>
            </div>
            <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
                Start Bootstrap
            </div>
        </nav>
        <nav v-else class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <!-- Handle case when userType is not found in localStorage -->
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userType: ''
        };
    },
    mounted() {
        const userType = localStorage.getItem('userType');
        if (userType) {
            this.userType = userType;
        } else {
            console.log('User Type Not Found');
            // Optionally handle this case, like redirecting to a login page
        }
    }
};
</script>
