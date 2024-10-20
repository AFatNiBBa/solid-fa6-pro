
import { Icon } from "../../index";

/**
 * A component that renders the `broom-wide` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broom-wide?s=sharp-light broom-wide}
 * @preview ![broom-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/broom-wide.svg)
 */
const BroomWide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M340 148L488 0l24 24L364 172l52 52L257.2 483.9 240 512l-23.3-23.3L23.3 295.3 0 272l28.1-17.2L288 96l52 52zM51.4 278.1l47.9 47.9 33.4-33.4L144 281.4 166.6 304l-11.3 11.3-33.4 33.4L233.9 460.6l89.6-146.6L197.9 188.6 51.4 278.1zM340.6 286l34.9-57.2-92.4-92.4L226 171.4 340.6 286z" />
    </Icon>
);

export default BroomWide;