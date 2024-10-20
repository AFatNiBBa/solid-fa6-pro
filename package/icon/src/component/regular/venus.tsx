
import { Icon } from "../../index";

/**
 * A component that renders the `venus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/venus?s=regular venus}
 * @preview ![venus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/venus.svg)
 */
const Venus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 176a128 128 0 1 1 256 0A128 128 0 1 1 64 176zM216 350.4c85.8-11.7 152-85.3 152-174.4C368 78.8 289.2 0 192 0S16 78.8 16 176c0 89.1 66.2 162.7 152 174.4l0 49.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-49.6z" />
    </Icon>
);

export default Venus;