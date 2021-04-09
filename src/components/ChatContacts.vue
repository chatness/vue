<template>
  <chat-contacts ref="contacts" />
</template>

<script>
import { ref, onMounted, getCurrentInstance } from 'vue';

export default {
  name: 'ChatContacts',
  props: {
    from: Object,
  },
  setup() {
    const contacts = ref();

    onMounted(() => {
      const instance = getCurrentInstance();
      contacts.value.from = instance.props.from;
    });

    return {
      contacts,
    };
  },
};
</script>
