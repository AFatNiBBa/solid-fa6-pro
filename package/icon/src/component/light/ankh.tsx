
import { Icon } from "../../index";

/**
 * A component that renders the `ankh` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ankh?s=light ankh}
 * @preview ![ankh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ankh.svg)
 */
const Ankh: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 128c0 48.2 25.8 88.6 55 118.7c14.4 14.8 28.8 26.4 39.7 34.2l1.3 .9 1.3-.9c10.9-7.8 25.3-19.3 39.7-34.2c29.2-30.1 55-70.5 55-118.7c0-53-43-96-96-96s-96 43-96 96zm52.1 160C79.1 255.9 32 200.8 32 128C32 57.3 89.3 0 160 0s128 57.3 128 128c0 72.8-47.1 127.9-84.1 160L304 288c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0 0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176L16 320c-8.8 0-16-7.2-16-16s7.2-16 16-16l100.1 0z" />
    </Icon>
);

export default Ankh;