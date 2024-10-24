
import { Icon } from "../../index";

/**
 * A component that renders the `boombox` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boombox?s=light boombox}
 * @preview ![boombox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/boombox.svg)
 */
const Boombox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 32l352 0c26.5 0 48 21.5 48 48l0 80L96 160l0-80c0-26.5 21.5-48 48-48zM64 80l0 80c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l0-80c0-44.2-35.8-80-80-80L144 0C99.8 0 64 35.8 64 80zM80 192l480 0 16 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-224c0-17.7 14.3-32 32-32l16 0zM96 336a80 80 0 1 1 160 0A80 80 0 1 1 96 336zm192 0A112 112 0 1 0 64 336a112 112 0 1 0 224 0zm176-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 192a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM208 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0z" />
    </Icon>
);

export default Boombox;