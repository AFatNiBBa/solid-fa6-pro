
import { Icon } from "../../index";

/**
 * A component that renders the `mound` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mound?s=sharp-thin mound}
 * @preview ![mound](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mound.svg)
 */
const Mound: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M547.7 400L28.3 400 156.3 186.6C184.1 140.3 234.1 112 288 112s103.9 28.3 131.7 74.6L547.7 400zm18.7 0l-133-221.7C402.7 127.2 347.6 96 288 96s-114.7 31.2-145.4 82.3L9.6 400 0 416l18.7 0 538.7 0 18.7 0-9.6-16z" />
    </Icon>
);

export default Mound;