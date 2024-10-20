
import { Icon } from "../../index";

/**
 * A component that renders the `toilet-portable` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-portable?s=regular toilet-portable}
 * @preview ![toilet-portable](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/toilet-portable.svg)
 */
const ToiletPortable: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 72l0 24 224 0 0-24c0-13.3-10.7-24-24-24L72 48C58.7 48 48 58.7 48 72zm0 72l0 288 224 0 0-112-24 0c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24l24 0 0-80L48 144zm0 336l0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 72C0 32.2 32.2 0 72 0L248 0c39.8 0 72 32.2 72 72l0 416c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8L48 480z" />
    </Icon>
);

export default ToiletPortable;