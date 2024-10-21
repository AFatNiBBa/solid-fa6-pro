
import { Icon } from "../../index";

/**
 * A component that renders the `mountains` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountains?s=solid mountains}
 * @preview ![mountains](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/mountains.svg)
 */
const Mountains: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M381.1 480L55.9 480C25 480 0 455 0 424.1c0-10.5 3-20.8 8.6-29.7L225.2 49c6.6-10.6 18.3-17 30.8-17s24.1 6.4 30.8 17l126 200.7 48.2-79C465 164.1 472.2 160 480 160s15 4.1 19.1 10.7l132 216.3c5.8 9.6 8.9 20.6 8.9 31.8c0 33.8-27.4 61.1-61.1 61.1l-122.8 0-75 0z" />
    </Icon>
);

export default Mountains;