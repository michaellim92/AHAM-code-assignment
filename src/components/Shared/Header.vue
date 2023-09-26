
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
          <CNavLink href="#">Link</CNavLink>
        </CNavItem>
        <CDropdown togglerText="Dropdown" variant="nav-item">
          <CDropdownItem href="#">View Funds</CDropdownItem>
        </CDropdown>
        <CNavItem>
          <CNavLink href="#" disabled>
            Disabled
          </CNavLink>
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
    }
  }
</script>
<style scoped>
    CHeader {
        width: 100vw;
    }

    CCollapse {
        position: right;
    }
</style>
