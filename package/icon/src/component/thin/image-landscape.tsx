
import { Icon } from "../../index";

/**
 * A component that renders the `image-landscape` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-landscape?s=thin image-landscape}
 * @preview ![image-landscape](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/image-landscape.svg)
 */
const ImageLandscape: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 80c-26.5 0-48 21.5-48 48l0 256c0 18.6 10.6 34.7 26 42.7L172.7 267c10-12.2 28.7-11.6 38 1.1l33.4 46 89.1-111.4c9.6-12 27.9-12 37.5 0L544.3 419.5c9.7-8.8 15.7-21.4 15.7-35.5l0-256c0-26.5-21.5-48-48-48L64 80zM58.6 431.7c1.8 .2 3.6 .3 5.4 .3l85.8 0 4-5 80-100-36-49.5c-3.1-4.2-9.3-4.4-12.7-.4L58.6 431.7zm111.7 .3L512 432c6.6 0 13-1.4 18.7-3.8L358.2 212.6c-3.2-4-9.3-4-12.5 0L250.1 332.2 170.2 432zM0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm128 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default ImageLandscape;