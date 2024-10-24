
import { Icon } from "../../index";

/**
 * A component that renders the `image-landscape` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-landscape?s=light image-landscape}
 * @preview ![image-landscape](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/image-landscape.svg)
 */
const ImageLandscape: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 96c17.7 0 32 14.3 32 32l0 256c0 6.1-1.7 11.8-4.6 16.6L377 197.6c-12.8-16-37.2-16-50 0L244.4 300.9l-27.3-37.5c-12.3-17-37.4-17.7-50.6-1.4L45.3 410C37.3 404.2 32 394.7 32 384l0-256c0-17.7 14.3-32 32-32l448 0zm-1.3 320l-317.4 0 63-78.8L352 217.6 510.7 416zM160.1 448L512 448c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l95.9 0 .3 0zm-7.8-32l-70.5 0L191.3 282.2l32.4 44.6L152.3 416zM144 160a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default ImageLandscape;