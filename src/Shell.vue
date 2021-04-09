<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar translucent slot="bottom">
        <ion-tab-button tab="profile" href="/@/profile">
          <ion-icon :icon="personCircleOutline" />
        </ion-tab-button>

        <ion-tab-button tab="home" href="/@/home">
          <ion-icon :icon="shapesOutline" />
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/@/contacts">
          <ion-icon :icon="chatbubblesOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage } from '@ionic/vue';
import {
  shapesOutline,
  chatbubblesOutline,
  personCircleOutline,
} from 'ionicons/icons';

export default {
  name: 'Shell',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      shapesOutline,
      chatbubblesOutline,
      personCircleOutline,
    };
  },
};
</script>
