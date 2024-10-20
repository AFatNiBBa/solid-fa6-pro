
import { Icon } from "../../index";

/**
 * A component that renders the `meteor` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meteor?s=sharp-thin meteor}
 * @preview ![meteor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/meteor.svg)
 */
const Meteor: typeof Icon = x => (
    <Icon {...x}>
        <path d="M302.5 35.3l-1.8 23.1-1.3 17.5L315.9 70 492.5 7 512 0l-7 19.5L442 196.1l-5.9 16.5 17.5-1.3 23.1-1.8L496 208l-9.7 16.8L378.6 410.7C342.3 473.4 275.4 512 203 512C90.9 512 0 421.1 0 309c0-72.4 38.6-139.4 101.3-175.7L287.2 25.7 304 16l-1.5 19.3zM304.8 91l-23.2 8.3 1.9-24.6 2.3-29.6L109.3 147.2C51.6 180.6 16 242.3 16 309c0 103.3 83.7 187 187 187c66.7 0 128.4-35.6 161.8-93.3L466.9 226.3l-29.6 2.3-24.6 1.9 8.3-23.2L485.6 26.4 304.8 91zM192 192a128 128 0 1 1 0 256 128 128 0 1 1 0-256zM304 320A112 112 0 1 0 80 320a112 112 0 1 0 224 0zM192 368a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-48-80a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
    </Icon>
);

export default Meteor;