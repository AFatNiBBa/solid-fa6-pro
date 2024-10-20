
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-smile-halo` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-halo?s=sharp-duotone-solid face-smile-halo}
 * @preview ![face-smile-halo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-smile-halo.svg)
 */
const FaceSmileHalo: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 272c0 132.5 107.5 240 240 240s240-107.5 240-240c0-41.9-10.7-81.3-29.6-115.5C413.9 178.3 339 192 256 192s-157.9-13.7-210.4-35.5C26.7 190.7 16 230.1 16 272zm104 32c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32zm9.7 55.2l28.6-14.3c8.7 17.5 41.3 55.2 97.7 55.2s88.9-37.7 97.7-55.2l28.6 14.3C369.7 384.3 327.6 432 256 432s-113.7-47.7-126.3-72.8zM280 304c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32z" />
        <path d="M256 160c141.4 0 256-35.8 256-80S397.4 0 256 0S0 35.8 0 80s114.6 80 256 80zm0-48C150 112 64 97.7 64 80s86-32 192-32s192 14.3 192 32s-86 32-192 32zM176 224c-28 0-56 40-56 80c0 0 28-32 56-32s56 32 56 32c0-40-28-80-56-80zm104 80s28-32 56-32s56 32 56 32c0-40-28-80-56-80s-56 40-56 80z" />
    </Icon>
);

export default FaceSmileHalo;