declare module '*.vue' {
    import Vue, { VueConstructor } from 'vue';
    interface V extends VueConstructor {
        install: (Vue: VueConstructor) => void;
    }
    const VExtend: V;
    export default VExtend;
}