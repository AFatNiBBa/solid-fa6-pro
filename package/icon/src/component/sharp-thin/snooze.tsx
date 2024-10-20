
import { Icon } from "../../index";

/**
 * A component that renders the `snooze` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snooze?s=sharp-thin snooze}
 * @preview ![snooze](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/snooze.svg)
 */
const Snooze: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 0l8 0L312 0l8 0 0 8 0 8 0 3.9-3.1 2.4L181 128l131 0 8 0 0 16-8 0-144 0-8 0 0-8 0-8 0-3.9 3.1-2.4L299 16 168 16l-8 0 0-16zM0 256l8 0 208 0 8 0 0 8 0 8 0 3.1-2.1 2.3L18.9 496 216 496l8 0 0 16-8 0L8 512l-8 0 0-8 0-8 0-3.1 2.1-2.3L205.1 272 8 272l-8 0 0-16zm296-32l144 0 8 0 0 8 0 8 0 3.3-2.3 2.3L307.3 384 440 384l8 0 0 16-8 0-144 0-8 0 0-8 0-8 0-3.3 2.3-2.3L428.7 240 296 240l-8 0 0-16 8 0z" />
    </Icon>
);

export default Snooze;