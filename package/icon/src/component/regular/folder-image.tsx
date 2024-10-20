
import { Icon } from "../../index";

/**
 * A component that renders the `folder-image` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-image?s=regular folder-image}
 * @preview ![folder-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/folder-image.svg)
 */
const FolderImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M251.7 127.6s0 0 0 0c10.5 10.5 24.7 16.4 39.6 16.4L448 144c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l33.9-33.9L208.8 84.7l42.9 42.9zm33.9-33.9L242.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L291.3 96c-2.1 0-4.2-.8-5.7-2.3zM160 208a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm155.2 9.6c-4.5-6-11.6-9.6-19.2-9.6s-14.7 3.6-19.2 9.6l-54.2 72.2L202.7 265c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l80 0 48 0 144 0c9.1 0 17.4-5.1 21.5-13.3s3.2-17.9-2.3-25.1l-96-128z" />
    </Icon>
);

export default FolderImage;