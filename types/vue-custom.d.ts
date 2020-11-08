declare module '*.vue' {
    import { DefineComponent } from 'vue';
    interface V extends DefineComponent {
        install: (Vue: DefineComponent) => void;
    }
    const component: V;
    export default component;
}