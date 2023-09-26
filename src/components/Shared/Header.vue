
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
  export default {
    data() {
      return { 
        visible: false,
      }
    },
    method: {
        redirectToLogin() {
            window.navigate('/login');
        }
    }
  }
</script>
<style scoped>
    CHeader {
        width: 100vw;
    }

    CCollapse {
        margin-left: 50vw;
        position: right;
    }
</style>
