
import { Icon } from "../../index";

/**
 * A component that renders the `moon-stars` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon-stars?s=sharp-light moon-stars}
 * @preview ![moon-stars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/moon-stars.svg)
 */
const MoonStars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 0L288 0l0 16 0 32-32 0-16 0 0 32 16 0 32 0 0 32 0 16 32 0 0-16 0-32 32 0 16 0 0-32-16 0-32 0 0-32 0-16zM252.2 137.6c-15.8-5.2-32.5-8.4-49.8-9.3c-3.4-.2-6.9-.3-10.4-.3C86 128 0 214 0 320S86 512 192 512c58.4 0 110.8-26.1 146-67.3c11-12.8 20.3-27.1 27.6-42.5c-13.9 6.6-29 11-44.8 12.8c-5.5 .6-11.1 1-16.7 1c-79.5 0-144-64.5-144-144c0-44.5 20.2-84.4 52-110.8c11.9-9.9 25.5-17.9 40.2-23.6zM166.6 162C142.5 192.1 128 230.4 128 272c0 92.1 70.8 167.7 160.9 175.4C262 467.8 228.4 480 192 480c-88.4 0-160-71.6-160-160c0-79.7 58.3-145.8 134.6-158zM432 160l0-16-32 0 0 16 0 64-64 0-16 0 0 32 16 0 64 0 0 64 0 16 32 0 0-16 0-64 64 0 16 0 0-32-16 0-64 0 0-64z" />
    </Icon>
);

export default MoonStars;