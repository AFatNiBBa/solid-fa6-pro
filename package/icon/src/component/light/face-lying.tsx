
import { Icon } from "../../index";

/**
 * A component that renders the `face-lying` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-lying?s=light face-lying}
 * @preview ![face-lying](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/face-lying.svg)
 */
const FaceLying: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224c79.8 0 149.8-41.7 189.5-104.5c4.7-7.5 14.6-9.7 22.1-5s9.7 14.6 5 22.1C427.3 464.3 347.2 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0C373.8 0 472.9 79.5 502.8 187.7c2.3 8.5-2.6 17.3-11.2 19.7s-17.3-2.6-19.7-11.2C445.8 101.5 359 32 256 32zM152.4 176a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm160 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM188.8 393.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4C180.7 351.1 208.6 336 240 336c13.6 0 26.6 2.8 38.4 8c8.1 3.5 11.8 13 8.3 21.1s-13 11.8-21.1 8.3c-7.8-3.4-16.5-5.3-25.6-5.3c-20.9 0-39.5 10-51.2 25.6zM288 224l160 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default FaceLying;