
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-circle-plus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-plus?s=duotone person-circle-plus}
 * @preview ![person-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-circle-plus.svg)
 */
const PersonCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 288c0 10.9 5.5 21.5 15.5 27.5c15.1 9.1 34.8 4.2 43.9-10.9L88 256.9 88 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-223.1 28.6 47.5c1.4 2.3 3.1 4.5 4.9 6.3c7.9-23 20.5-43.9 36.6-61.5l-44.9-74.7c-17.4-28.9-48.6-46.6-82.3-46.6l-29.7 0c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97C1.5 276.7 0 282.4 0 288zM112 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-80c-8.8 0-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default PersonCirclePlus;