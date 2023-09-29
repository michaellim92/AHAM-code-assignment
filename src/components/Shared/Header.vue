
<template>
<CHeader>
  <CContainer fluid>
    <CHeaderBrand href="#">AHAM - Affin Hwang Asset Management</CHeaderBrand>
    <CHeaderToggler @click="visible = !visible" />
    <CCollapse class="header-collapse" :visible="visible">
      <CHeaderNav>
        <CNavItem>
          <CNavLink href="#" active>
            Home
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <button :click="{redirectToLogin}">Logout</button>
        </CNavItem>
      </CHeaderNav>
      <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </CCollapse>
  </CContainer>
</CHeader>
</template>
<script>
import { CHeader } from '@coreui/vue'
  export default {
    data() {
      return { 
        visible: false,
      }
    },
    method: {
        redirectToLogin() {
            const routes = {
              '/': Home,
              '/login': Logout
            }
            const currentPath = ref(window.location.hash)

            window.addEventListener('hashchange', () => {
              currentPath.value = window.location.hash
            })

            const currentView = computed(() => {
              return routes[currentPath.value.slice(1) || '/'] || NotFound
            })
        }
      }
  }
</script>
<style scoped>
    CHeader {
        width: 100vw;
        position: sticky;

    }

    CCollapse {
        margin-left: 50vw;
        position: right;
    }
</style>
