
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crutch` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crutch?s=sharp-duotone-solid crutch}
 * @preview ![crutch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/crutch.svg)
 */
const Crutch: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M289.1 46.4c5.9 5.9 11.7 11.7 17.6 17.6c1.7 1.7 3.4 3.4 5 5L352 109.3c16.9 16.9 33.8 33.8 50.7 50.7c13.4 13.4 26.8 26.8 40.2 40.2l5 5 17.6 17.6 45.3-45.3L488.2 155 357 23.8 334.4 1.1 289.1 46.4z" />
        <path d="M209.5 161.3L306.7 64 352 109.3 277.3 184 328 234.7 402.7 160 448 205.3l-97.4 97.4-56 56-6.3 6.3-8.6 2.1L160.4 396.9l-41.7 41.7-73 73L.4 466.3l72.9-72.9c0 0 0 0 .1-.1l41.7-41.7L145 232.2l2.1-8.6 6.3-6.3 55.9-55.9 .1-.1 .1-.1zm22.5 68l-27.1 27.1L188 324l67.7-16.9L282.7 280 232 229.3z" />
    </Icon>
);

export default Crutch;