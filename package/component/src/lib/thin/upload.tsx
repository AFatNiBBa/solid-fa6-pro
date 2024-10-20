
import { Icon } from "../../index";

/**
 * A component that renders the `upload` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/upload?s=thin upload}
 * @preview ![upload](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/upload.svg)
 */
const Upload: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 27.3L264 376c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-348.7L133.7 141.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l128-128c3.1-3.1 8.2-3.1 11.3 0l128 128c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L264 27.3zM216 336L64 336c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-152 0 0-16 152 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l152 0 0 16zm216 64a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm32 16a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
    </Icon>
);

export default Upload;