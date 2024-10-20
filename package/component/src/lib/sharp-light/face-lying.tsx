
import { Icon } from "../../index";

/**
 * A component that renders the `face-lying` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-lying?s=sharp-light face-lying}
 * @preview ![face-lying](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-lying.svg)
 */
const FaceLying: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224c79.8 0 149.8-41.7 189.5-104.5l27.1 17.1C427.3 464.3 347.2 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0C373.8 0 472.9 79.5 502.8 187.7l-30.8 8.5C445.8 101.5 359 32 256 32zM152.4 176a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm160 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM188.8 393.6l-9.6 12.8-25.6-19.2 9.6-12.8C180.7 351.1 208.6 336 240 336c13.6 0 26.6 2.8 38.4 8l14.7 6.4-12.8 29.3-14.7-6.4c-7.8-3.4-16.5-5.3-25.6-5.3c-20.9 0-39.5 10-51.2 25.6zM288 224l160 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-96 0-16 0 0-32 16 0 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0-16 0 0-32 16 0z" />
    </Icon>
);

export default FaceLying;