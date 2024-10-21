
import { Icon } from "../../index";

/**
 * A component that renders the `wind-warning` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind-warning?s=thin wind-warning}
 * @preview ![wind-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/wind-warning.svg)
 */
const WindWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 464c86.5 0 160.7-52.8 192.1-128l17.2 0C401.1 420.2 319.5 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224l-16 0c0-114.9-93.1-208-208-208S16 141.1 16 256s93.1 208 208 208zm0-336c4.4 0 8 3.6 8 8l0 160c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-160c0-4.4 3.6-8 8-8zM208 352a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM480 472c0-4.4 3.6-8 8-8l56 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-216 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l216 0c53 0 96 43 96 96s-43 96-96 96l-56 0c-4.4 0-8-3.6-8-8zm64-248l-66 0c-.7-5.4-1.5-10.7-2.5-16l68.5 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-56 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l56 0c53 0 96 43 96 96s-43 96-96 96z" />
    </Icon>
);

export default WindWarning;