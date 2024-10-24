
import { Icon } from "../../index";

/**
 * A component that renders the `down-to-line` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-to-line?s=sharp-thin down-to-line}
 * @preview ![down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/down-to-line.svg)
 */
const DownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 464l-8 0 0 16 8 0 368 0 8 0 0-16-8 0L8 464zM128 192l-16 0-64 0-16 0 0 16 0 16L180.7 372.7 192 384l11.3-11.3L352 224l0-16 0-16-16 0-64 0-16 0 0-16 0-128 0-16-16 0-96 0-16 0 0 16 0 128 0 16zm0 16l16 0 0-16 0-144 96 0 0 144 0 16 16 0 80 0 0 9.4-144 144L48 217.4l0-9.4 80 0z" />
    </Icon>
);

export default DownToLine;