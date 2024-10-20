
import { Icon } from "../../index";

/**
 * A component that renders the `ditto` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ditto?s=light ditto}
 * @preview ![ditto](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/ditto.svg)
 */
const Ditto: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M96 98.3L96 96c0-17.7-14.3-32-32-32S32 78.3 32 96l0 2.3c0 2 .2 3.9 .5 5.9L58 251c.5 2.9 3 5 6 5s5.5-2.1 6-5L95.5 104.2l30.9 5.4-30.9-5.4c.3-1.9 .5-3.9 .5-5.9zm-96 0L0 96C0 60.7 28.7 32 64 32s64 28.7 64 64l0 2.3c0 3.8-.3 7.6-1 11.4L101.5 256.5C98.3 274.7 82.5 288 64 288s-34.3-13.3-37.5-31.5L1 109.6c-.7-3.8-1-7.5-1-11.4zm288 0l0-2.3c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 2.3c0 2 .2 3.9 .5 5.9L250 251c.5 2.9 3 5 6 5s5.5-2.1 6-5l25.5-146.8 30.9 5.4-30.9-5.4c.3-1.9 .5-3.9 .5-5.9zm-96 0l0-2.3c0-35.3 28.7-64 64-64s64 28.7 64 64l0 2.3c0 3.8-.3 7.6-1 11.4L293.5 256.5c-3.2 18.2-19 31.5-37.5 31.5s-34.3-13.3-37.5-31.5L193 109.6c-.7-3.8-1-7.5-1-11.4z" />
    </Icon>
);

export default Ditto;