<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title size="medium">Contacts</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense" class="ion-no-border">
        <ion-toolbar>
          <ion-title size="large">Contacts</ion-title>
        </ion-toolbar>
        <ion-searchbar showCancelButton="focus" debounce="500"></ion-searchbar>
      </ion-header>

      <ChatContacts :from="from" />

      <ion-fab vertical="bottom" horizontal="end" slot="fixed" class="fab">
        <ion-fab-button color="primary">
          <ion-icon :icon="pencilSharp" />
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import ChatContacts from '@/components/ChatContacts.vue';
import { pencilSharp } from 'ionicons/icons';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/vue';

export default {
  name: 'Contacts',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonSearchbar,
    IonFab,
    IonIcon,
    IonFabButton,
    ChatContacts,
  },
  setup() {
    return {
      pencilSharp,
      from: {
        name: 'John Doe',
        objectId: '5EOJTH9nUzM526vKPSVrHzp2zFP2',
        email: 'john@doe.com',
      },
    };
  },
};
</script>
