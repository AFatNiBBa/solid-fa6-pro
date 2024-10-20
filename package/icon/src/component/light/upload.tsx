
import { Icon } from "../../index";

/**
 * A component that renders the `upload` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/upload?s=light upload}
 * @preview ![upload](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/upload.svg)
 */
const Upload: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 54.6L272 368c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-313.4L139.3 155.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l128-128c6.2-6.2 16.4-6.2 22.6 0l128 128c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L272 54.6zM208 352L64 352c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-144 0 0-32 144 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l144 0 0 32zm176 64a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Upload;