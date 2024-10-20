
import { Icon } from "../../index";

/**
 * A component that renders the `lamp` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp?s=sharp-light lamp}
 * @preview ![lamp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/lamp.svg)
 */
const Lamp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M34.2 256L0 256l12-32L96 0 352 0l84 224 12 32-34.2 0L34.2 256zm12-32l355.6 0-72-192L118.2 32l-72 192zM160 320l0-32 32 0 0 32 0 15.5-12.1 9.6s0 0 0 0l-.3 .2c-.3 .2-.8 .7-1.5 1.3c-1.4 1.2-3.5 3-6.1 5.5c-5.2 4.9-12.1 12-18.9 20.7C138.8 390.9 128 411.9 128 432c0 16.8 5.6 31.4 11.8 42.1c1.2 2.2 2.5 4.1 3.6 5.9l161.2 0c1.2-1.8 2.4-3.7 3.6-5.9c6.2-10.8 11.8-25.3 11.8-42.1c0-20.1-10.8-41.1-25.1-59.3c-6.8-8.7-13.7-15.8-18.9-20.7c-2.6-2.4-4.7-4.3-6.1-5.5c-.7-.6-1.2-1-1.5-1.3l-.3-.2s0 0 0 0L256 335.5l0-15.5 0-32 32 0 0 32s64 50.5 64 112c0 48-32 80-32 80l-192 0s-32-32-32-80c0-61.5 64-112 64-112z" />
    </Icon>
);

export default Lamp;