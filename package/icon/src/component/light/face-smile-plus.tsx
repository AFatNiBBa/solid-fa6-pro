
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile-plus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-plus?s=light face-smile-plus}
 * @preview ![face-smile-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/face-smile-plus.svg)
 */
const FaceSmilePlus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M560 16l0 64 64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0 0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 0-64c0-8.8 7.2-16 16-16s16 7.2 16 16zM416 288A192 192 0 1 0 32 288a192 192 0 1 0 384 0zM0 288a224 224 0 1 1 448 0A224 224 0 1 1 0 288zm144.4-72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm136 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM126.9 330.1c4.5 11.2 15.1 29.1 31.8 44C175.1 388.7 196.8 400 224 400s48.9-11.3 65.3-25.9c16.7-14.9 27.3-32.8 31.8-44c3.3-8.2 12.6-12.2 20.8-8.9s12.2 12.6 8.9 20.8c-6.2 15.4-19.5 37.5-40.2 56C289.8 416.6 260.8 432 224 432s-65.8-15.4-86.7-34.1c-20.7-18.5-34-40.6-40.2-56c-3.3-8.2 .7-17.5 8.9-20.8s17.5 .7 20.8 8.9z" />
    </Icon>
);

export default FaceSmilePlus;