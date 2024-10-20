
import { Icon } from "../../index";

/**
 * A component that renders the `megaphone` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/megaphone?s=light megaphone}
 * @preview ![megaphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/megaphone.svg)
 */
const Megaphone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 32c-8.8 0-16 7.2-16 16l0 11.5L32 187.5 32 176c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 19.5L0 208l0 96 0 12.5L0 336c0 8.8 7.2 16 16 16s16-7.2 16-16l0-11.5 131.7 32.9c-2.4 8.4-3.7 17.4-3.7 26.6c0 53 43 96 96 96c46.2 0 84.7-32.6 93.9-76L544 452.5l0 11.5c0 8.8 7.2 16 16 16s16-7.2 16-16l0-24 0-368 0-24c0-8.8-7.2-16-16-16zM544 419.5L32 291.5l0-71 512-128 0 327zM192 384c0-6.5 1-12.9 2.8-18.8l124 31C313.1 425.7 287.2 448 256 448c-35.3 0-64-28.7-64-64z" />
    </Icon>
);

export default Megaphone;