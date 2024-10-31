
import { Icon } from "../../index";

/**
 * A component that renders the `q` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/q?s=sharp-thin q}
 * @preview ![q](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/q.svg)
 */
const Q: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 256c0 114.9 93.1 208 208 208c47.9 0 91.9-16.2 127.1-43.3L219.4 256l20.5 0L363.4 410.4C405.5 372.3 432 317.3 432 256c0-114.9-93.1-208-208-208S16 141.1 16 256zM361.1 433.2C323.2 462.5 275.6 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 66.3-28.8 125.9-74.6 166.9L444.6 512l-20.5 0-63.1-78.8z" />
    </Icon>
);

export default Q;