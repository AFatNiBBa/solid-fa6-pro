
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bottle-droplet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bottle-droplet?s=duotone bottle-droplet}
 * @preview ![bottle-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bottle-droplet.svg)
 */
const BottleDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M32 256l0 192c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-192c0-43.5-21.7-81.9-54.8-105c-10-7-17.2-17.9-17.2-30.1L216 48c-37.3 0-74.7 0-112 0l0 72.9c0 12.2-7.2 23.1-17.2 30.1C53.7 174.1 32 212.5 32 256zm80 80c0-22.2 23-52 37.2-68.2c5.8-6.7 15.9-6.7 21.7 0C185 284 208 313.8 208 336c0 32-21.5 48-48 48s-48-21.5-48-48z" />
        <path d="M96 0C82.7 0 72 10.7 72 24s10.7 24 24 24l128 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L96 0zm64 384c26.5 0 48-16 48-48c0-22.2-23-52-37.2-68.2c-5.8-6.7-15.9-6.7-21.7 0C135 284 112 313.8 112 336c0 26.5 21.5 48 48 48z" />
    </Icon>
);

export default BottleDroplet;