declare module '@/packages/*' {
    import { App } from 'vue';

    interface V extends App {
        install: (Vue: App) => void;
    }
    const VExtend: V;
    export default VExtend;
}
