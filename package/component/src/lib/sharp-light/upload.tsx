
import { Icon } from "../../index";

/**
 * A component that renders the `upload` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/upload?s=sharp-light upload}
 * @preview ![upload](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/upload.svg)
 */
const Upload: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 368l0 16-32 0 0-16 0-305.4L139.3 163.3 128 174.6 105.4 152l11.3-11.3 128-128L256 1.4l11.3 11.3 128 128L406.6 152 384 174.6l-11.3-11.3L272 62.6 272 368zm-64-16L32 352l0 128 448 0 0-128-176 0 0-32 176 0 32 0 0 32 0 128 0 32-32 0L32 512 0 512l0-32L0 352l0-32 32 0 176 0 0 32zm176 64a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Upload;