
import { Icon } from "../../index";

/**
 * A component that renders the `ring` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ring?s=sharp-light ring}
 * @preview ![ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ring.svg)
 */
const Ring: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 170.9L32 195c1.8 2.5 4.7 6.1 8.6 10.6c7.6 8.5 19.3 19.8 35.7 31.4c40.5-24 99.1-45 179.6-45s139.1 21 179.6 45c16.4-11.6 28.1-22.9 35.7-31.4c4-4.4 6.8-8.1 8.6-10.6l0-24.1C457.6 145.8 387.9 96 256 96S54.4 145.8 32 170.9zM403.8 256c-35-17.6-83.3-32-147.8-32s-112.7 14.4-147.8 32c35 17.6 83.4 32 147.8 32s112.7-14.4 147.8-32zM60.9 265.2c-11.4-7.8-21-15.7-28.9-22.9l0 98.8C54.4 366.2 124.1 416 256 416s201.6-49.8 224-74.9l0-98.8c-7.9 7.3-17.5 15.1-28.9 22.9C410.6 292.9 347.4 320 256 320s-154.6-27.1-195.1-54.8zM512 160l0 192c-21.3 32-102.4 96-256 96S21.3 384 0 352L0 160c21.3-32 102.4-96 256-96s234.7 64 256 96z" />
    </Icon>
);

export default Ring;