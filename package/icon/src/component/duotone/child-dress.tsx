
import { Icon, generic } from "../../index";

/**
 * A component that renders the `child-dress` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child-dress?s=duotone child-dress}
 * @preview ![child-dress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/child-dress.svg)
 */
const ChildDress: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M96 64a64 64 0 1 0 128 0A64 64 0 1 0 96 64z" />
        <path d="M86.2 285.5L57.5 323.3c-10.7 14.1-30.8 16.8-44.8 6.2s-16.8-30.7-6.2-44.8L65.4 207c22.4-29.6 57.5-47 94.6-47s72.2 17.4 94.6 47l58.9 77.7c10.7 14.1 7.9 34.2-6.2 44.8s-34.2 7.9-44.8-6.2l-28.7-37.8L265 378.9c3.5 10.4-4.3 21.1-15.2 21.1L232 400l0 80c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-80-16 0 0 80c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-80-17.8 0c-10.9 0-18.6-10.7-15.2-21.1l31.1-93.4z" />
    </Icon>
);

export default ChildDress;