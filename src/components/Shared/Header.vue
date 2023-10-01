
<template>
<CHeader class="sticky top-0 bg-slate-800	 p-6 shadow-lg">
  <CContainer fluid>
    <CHeaderBrand href="#">AHAM - Affin Hwang Asset Management</CHeaderBrand>
    <CHeaderToggler @click="visible = !visible" />
    <CCollapse class="header-collapse" :visible="visible">
      <CHeaderNav class="items-center gap-x-4 flex-1">
        <CNavItem>
          <router-link to="/" active>
          <strong>
            Home
          </strong>
          </router-link>
        </CNavItem>
        <CNavItem>
          <router-link :to="{ name: 'browse' }">Logout</router-link>
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
