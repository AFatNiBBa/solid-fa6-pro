
import { Icon } from "../../index";

/**
 * A component that renders the `kazoo` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kazoo?s=sharp-regular kazoo}
 * @preview ![kazoo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/kazoo.svg)
 */
const Kazoo: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M560 256c0 29.6-8.9 57.1-24.2 80l56.2 0 0-160-56.2 0c15.3 22.9 24.2 50.4 24.2 80zm32 128l-110 0c-19.8 10.2-42.2 16-66 16s-46.3-5.8-66-16l-126 0L0 320 0 192l224-64 126 0c19.8-10.2 42.2-16 66-16s46.3 5.8 66 16l110 0 48 0 0 48 0 160 0 48-48 0zM230.7 336l65.5 0c-15.3-22.9-24.2-50.4-24.2-80s8.9-57.1 24.2-80l-65.5 0L48 228.2l0 55.6L230.7 336zM416 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM398.1 209.9L416 227.7l17.9-17.9L448 195.7 476.3 224l-14.1 14.1L444.3 256l17.9 17.9L476.3 288 448 316.3l-14.1-14.1L416 284.3l-17.9 17.9L384 316.3 355.7 288l14.1-14.1L387.7 256l-17.9-17.9L355.7 224 384 195.7l14.1 14.1z" />
    </Icon>
);

export default Kazoo;