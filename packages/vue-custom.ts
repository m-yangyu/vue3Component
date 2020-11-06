import { VueConstructor } from 'vue';

export interface V extends VueConstructor {
    install: (Vue: VueConstructor) => void;
}