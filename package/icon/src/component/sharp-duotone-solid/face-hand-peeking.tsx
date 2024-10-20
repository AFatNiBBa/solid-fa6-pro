
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-hand-peeking` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-hand-peeking?s=sharp-duotone-solid face-hand-peeking}
 * @preview ![face-hand-peeking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-hand-peeking.svg)
 */
const FaceHandPeeking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M84.3 356C123.2 447.7 214.1 512 320 512c87.8 0 165.3-44.2 211.4-111.5c-3.5 .3-7 .4-10.6 .4l-64.8 0-32 0 0-32 0-8.9-16 0-32 0 0-32 0-17.5c-41-7.5-72-43.4-72-86.5c0-48.6 39.4-88 88-88c6.8 0 13.3 .8 19.7 2.2l13.8-19.4 25.9 17.8 42.1 28.9 26.9-26.8 17.4-17.4C492.6 48.5 412 0 320 0C246.5 0 180.2 31 133.5 80.6l2.1 2.1L163.9 111l22.6 22.6L176.1 144l63.9 0 32 0 0 32 0 8 0 24 0 8 0 8 0 16 0 8 0 8 0 24 0 8 0 32-32 0-16 0 0 8.9 0 32-32 0-72.8 0c-11.9 0-23.7-1.7-34.9-4.9zM240 216c0 10.7 0 21.3 0 32c0-2.7 0-5.3 0-8l0-16c0-2.7 0-5.3 0-8zm16 184c0-26.5 28.7-48 64-48s64 21.5 64 48s-28.7 48-64 48s-64-21.5-64-48zM368.4 224c0 6.1 2.3 11.8 6.1 16l35.8 0c3.8-4.2 6.1-9.9 6.1-16c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        <path d="M118.2 176L240 176l0 32-80 0 0 8 80 0 0 32-80 0 0 8 80 0 .3 32L160 288l0 8.9 32 0 0 32-72.8 0c-25.2 0-49.5-10-67.3-27.9c-36.9-36.9-37.2-96.6-.8-133.8l.8-.8L113 105.3l28.3 28.3-28.8 28.8L98.8 176l19.3 0zm427.4 44.4l-30.8-30.8L543 161.3l45.1 45.1 .8 .8c36.4 37.2 36.1 96.9-.8 133.8c-17.9 17.9-42.1 27.9-67.3 27.9l-72.8 0 0-32 32 0 0-8.9-72 0 0-32 72 0 0-8-72 0 0-32 58.6 0 24.9 0 0-12.2-17-12.2L414.7 189l18.6-26 112.2 77 0-19.6z" />
    </Icon>
);

export default FaceHandPeeking;