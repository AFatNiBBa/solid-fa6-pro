
import { Icon } from "../../index";

/**
 * A component that renders the `bottle-droplet` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bottle-droplet?s=light bottle-droplet}
 * @preview ![bottle-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bottle-droplet.svg)
 */
const BottleDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M72 16C72 7.2 79.2 0 88 0l8 0s0 0 0 0l32 0 64 0 32 0 8 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-8 0 0 113.1c38.3 22.1 64 63.5 64 110.9l0 192c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-192c0-47.4 25.7-88.7 64-110.9L96 32l-8 0c-8.8 0-16-7.2-16-16zM192 32l-64 0 0 113.1c0 11.4-6.1 22-16 27.7C83.2 189.5 64 220.5 64 256l0 192c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-192c0-35.5-19.2-66.5-48-83.2c-9.9-5.7-16-16.3-16-27.7L192 32zm0 305c0-5.6-4-17.2-14.6-33.5c-5.4-8.3-11.5-16.5-17.4-23.6c-5.9 7.2-12 15.3-17.4 23.6C132 319.8 128 331.4 128 337c0 16.6 13.8 31 32 31c11.5 0 19.3-3.4 23.8-7.5c4-3.6 8.2-10.3 8.2-23.5zm32 0c0 42-28.7 63-64 63s-64-28.2-64-63c0-31 34.9-73.5 53.2-93.6c5.9-6.5 15.8-6.5 21.6 0C189.1 263.5 224 306 224 337z" />
    </Icon>
);

export default BottleDroplet;