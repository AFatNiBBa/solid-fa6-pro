
import { Icon } from "../../index";

/**
 * A component that renders the `image-landscape` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-landscape?s=regular image-landscape}
 * @preview ![image-landscape](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/image-landscape.svg)
 */
const ImageLandscape: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 112c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l19.8 0 80.8-110.2c4.5-6.2 11.7-9.8 19.4-9.8s14.8 3.6 19.4 9.8L232.8 330l83.1-127.1c4.4-6.8 12-10.9 20.1-10.9s15.7 4.1 20.1 10.9L485 400l27 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16L64 112zM96 448l-32 0c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-40 0-200 0-72 0L96 448zm64-288a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default ImageLandscape;