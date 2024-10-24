
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scissors` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scissors?s=sharp-duotone-solid scissors}
 * @preview ![scissors](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/scissors.svg)
 */
const Scissors: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 112c0 61.9 50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l64-64-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112zm160 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm96 208L416 480l64 0 32-32L320 256c-21.3 21.3-42.7 42.7-64 64z" />
        <path d="M64 400a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm88.5-104.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L512 64 480 32l-64 0L152.5 295.5z" />
    </Icon>
);

export default Scissors;