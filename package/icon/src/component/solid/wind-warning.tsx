
import { Icon } from "../../index";

/**
 * A component that renders the `wind-warning` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind-warning?s=solid wind-warning}
 * @preview ![wind-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/wind-warning.svg)
 */
const WindWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M418 368c-38.7 67-111.1 112-194 112C100.3 480 0 379.7 0 256S100.3 32 224 32c118.3 0 215.2 91.8 223.4 208L384 240c-35.3 0-64 28.7-64 64s28.7 64 64 64l34 0zM248 152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zM224 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm248 48c0-17.7 14.3-32 32-32l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-152 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l152 0c53 0 96 43 96 96s-43 96-96 96l-32 0c-17.7 0-32-14.3-32-32zm72-192l-64.5 0c-1.4-22.2-5.6-43.7-12.3-64l76.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c53 0 96 43 96 96s-43 96-96 96z" />
    </Icon>
);

export default WindWarning;