
import { Icon } from "../../index";

/**
 * A component that renders the `upload` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/upload?s=sharp-thin upload}
 * @preview ![upload](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/upload.svg)
 */
const Upload: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 376l0 8-16 0 0-8 0-340.7L133.7 149.7l-5.7 5.7L116.7 144l5.7-5.7 128-128L256 4.7l5.7 5.7 128 128 5.7 5.7L384 155.3l-5.7-5.7L264 35.3 264 376zm-48-40L16 336l0 160 480 0 0-160-200 0 0-16 200 0 16 0 0 16 0 160 0 16-16 0L16 512 0 512l0-16L0 336l0-16 16 0 200 0 0 16zm216 64a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm32 16a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
    </Icon>
);

export default Upload;