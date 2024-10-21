
import { Icon, generic } from "../../index";

/**
 * A component that renders the `restroom` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/restroom?s=duotone restroom}
 * @preview ![restroom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/restroom.svg)
 */
const Restroom: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 304c0 13.6 8.8 26.3 22.5 30.5c12.4 3.9 25.4-.2 33.5-9.4L56 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-154.8c8.1 9.2 21.1 13.2 33.5 9.4c16.9-5.3 26.3-23.2 21-40.1l-30.9-99.1C211.1 155.3 174 128 132 128l-8 0c-42 0-79.1 27.3-91.6 67.4L1.5 294.5C.5 297.6 0 300.9 0 304zM80 48a48 48 0 1 0 96 0A48 48 0 1 0 80 48zM385.5 294.5c-5.3 16.9 4.1 34.8 21 40.1c3.2 1 6.4 1.5 9.5 1.5l-9 26.9c-3.5 10.4 4.3 21.1 15.2 21.1l17.8 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 16 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 17.8 0c10.9 0 18.6-10.7 15.2-21.1L608 336c3.2 0 6.4-.5 9.5-1.5c16.9-5.3 26.3-23.2 21-40.1l-29.7-95.2C595.6 156.9 556.4 128 512 128s-83.6 28.9-96.8 71.2l-29.7 95.2zM464 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M320 0c13.3 0 24 10.7 24 24l0 464c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-464c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default Restroom;