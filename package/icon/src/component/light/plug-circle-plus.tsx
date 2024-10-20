
import { Icon } from "../../index";

/**
 * A component that renders the `plug-circle-plus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug-circle-plus?s=light plug-circle-plus}
 * @preview ![plug-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/plug-circle-plus.svg)
 */
const PlugCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M432 256a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-224c-8.8 0-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16zM112 0c8.8 0 16 7.2 16 16l0 96-32 0 0-96c0-8.8 7.2-16 16-16zM272 0c8.8 0 16 7.2 16 16l0 96-32 0 0-96c0-8.8 7.2-16 16-16zM0 160c0-8.8 7.2-16 16-16l16 0 32 0 256 0 32 0 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0 0 35.2c-11.4 5.9-22.2 12.9-32 21l0-56.2L64 176l0 64c0 70.7 57.3 128 128 128c23.7 0 45.8-6.4 64.9-17.6c-.6 5.8-.9 11.7-.9 17.6c0 6.2 .3 12.3 .9 18.3c-15.2 6.8-31.7 11.2-48.9 12.9l0 96.8c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96.8C95.1 391.2 32 323 32 240l0-64-16 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default PlugCirclePlus;