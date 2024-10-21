
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-shush` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-shush?s=sharp-duotone-solid face-shush}
 * @preview ![face-shush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-shush.svg)
 */
const FaceShush: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 357.2 58.7 444.7 144 486.3l0-54.3 0-56 0-24 0-32 32 0 24 0 0-44.1c-14.8-6.9-26.6-15.9-35.3-24.6L153.4 240 176 217.4l11.3 11.3c3.5 3.5 7.7 7.1 12.7 10.5l0-15.2 0-32 32 0 48 0 32 0 0 32 0 15.2c4.9-3.4 9.2-7 12.7-10.5L336 217.4 358.6 240l-11.3 11.3c-8.7 8.7-20.5 17.7-35.3 24.6l0 44.1 8 0 32 0 0 32 0 10.1 .8-1 24.6 20.5 36.9 30.7 24.6 20.5-10 12C480 398 512 330.7 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256zM176.4 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
        <path d="M200 488H176v24h24V488zm0-112V352H176v24h24zm96 0h24V352H296v24zM280 248V224H232v24h48zm98.4 207.4l15.4-18.4-36.9-30.7-15.4 18.4 36.9 30.7zM320 488v24h11.2l7.2-8.6L320 488zm-40-24H200v48h80V464zm-56 24V432H176v56h48zm0-56V376H176v56h48zm48-56v56h48V376H272zm21.8 92.3l-80-56-27.5 39.3 80 56 27.5-39.3zM232 248v72h48V248H232zm48 264h40V464H280v48zm58.4-8.6l40-48-36.9-30.7-40 48 36.9 30.7zM200 400h48V352H200v48zm48 0h48V352H248v48z" />
    </Icon>
);

export default FaceShush;