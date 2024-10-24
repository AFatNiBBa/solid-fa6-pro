
import { Icon } from "../../index";

/**
 * A component that renders the `video` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video?s=sharp-thin video}
 * @preview ![video](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/video.svg)
 */
const Video: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 80l0 352 352 0 0-88 0-176 0-88L16 80zM384 352l0 80 0 16-16 0L16 448 0 448l0-16L0 80 0 64l16 0 352 0 16 0 0 16 0 80 0 17.9 0 156.2 0 17.9zm32-1.9l144 72 0-332.2-144 72 0-17.9L560 72l16-8 0 17.9 0 348.2 0 17.9-16-8L416 368l0-17.9z" />
    </Icon>
);

export default Video;