
import { Icon } from "../../index";

/**
 * A component that renders the `gif` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gif?s=light gif}
 * @preview ![gif](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/gif.svg)
 */
const Gif: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l448 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM304 160c-8.8 0-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16s16-7.2 16-16l0-160c0-8.8-7.2-16-16-16zm48 16l0 80 0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64 64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0 0-48 80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16zM128 256c0-35.3 28.7-64 64-64c14.4 0 27.7 4.8 38.4 12.8c7.1 5.3 17.1 3.9 22.4-3.2s3.9-17.1-3.2-22.4c-16-12.1-36-19.2-57.6-19.2c-53 0-96 43-96 96s43 96 96 96c21.6 0 41.6-7.1 57.6-19.2c4-3 6.4-7.8 6.4-12.8l0-64c0-8.8-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 0 39.4c-9.4 5.4-20.3 8.6-32 8.6c-35.3 0-64-28.7-64-64z" />
    </Icon>
);

export default Gif;