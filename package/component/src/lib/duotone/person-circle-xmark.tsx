
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-circle-xmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-xmark?s=duotone person-circle-xmark}
 * @preview ![person-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-circle-xmark.svg)
 */
const PersonCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 288c0 10.9 5.5 21.5 15.5 27.5c15.1 9.1 34.8 4.2 43.9-10.9L88 256.9 88 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-223.1 28.6 47.5c1.4 2.3 3.1 4.5 4.9 6.3c7.9-23 20.5-43.9 36.6-61.5l-44.9-74.7c-17.4-28.9-48.6-46.6-82.3-46.6l-29.7 0c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97C1.5 276.7 0 282.4 0 288zM112 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm203.3-59.3c-6.2-6.2-16.4-6.2-22.6 0L432 345.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 368l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L432 390.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L454.6 368l36.7-36.7c6.2-6.2 6.2-16.4 0-22.6z" />
    </Icon>
);

export default PersonCircleXmark;