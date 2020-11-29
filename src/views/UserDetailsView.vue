<template>
    <div>
        <BackButton/>
        <UserDetails/>
    </div>
</template>

<script>
// @ is an alias to /src
import UserDetails from '@/components/UserDetails.vue'
import BackButton from '@/components/BackButton.vue'

export default {
  components: {
    UserDetails,
    BackButton,
  }
}
</script>
