
import { Icon } from "../../index";

/**
 * A component that renders the `church` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/church?s=sharp-solid church}
 * @preview ![church](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/church.svg)
 */
const Church: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M344 24l0-24L296 0l0 24 0 24-32 0-24 0 0 48 24 0 32 0 0 46.4L160 224l0 288 96 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 96 0 0-288L344 142.4 344 96l32 0 24 0 0-48-24 0-32 0 0-24zM0 344L0 512l128 0 0-238.4L0 344zM640 512l0-168L512 273.6 512 512l128 0z" />
    </Icon>
);

export default Church;