
import { Icon } from "../../index";

/**
 * A component that renders the `snooze` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snooze?s=solid snooze}
 * @preview ![snooze](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/snooze.svg)
 */
const Snooze: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0-57.6 76.8c-7.3 9.7-8.4 22.7-3 33.5s16.5 17.7 28.6 17.7l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 57.6-76.8c7.3-9.7 8.4-22.7 3-33.5S300.1 0 288 0L192 0zM320 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0-57.6 76.8c-7.3 9.7-8.4 22.7-3 33.5s16.5 17.7 28.6 17.7l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 57.6-76.8c7.3-9.7 8.4-22.7 3-33.5S428.1 224 416 224l-96 0zM32 256c-17.7 0-32 14.3-32 32s14.3 32 32 32l91.7 0L7.4 459.5c-7.9 9.5-9.7 22.8-4.4 34.1S19.6 512 32 512l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-91.7 0L216.6 308.5c7.9-9.5 9.7-22.8 4.4-34.1s-16.6-18.4-29-18.4L32 256z" />
    </Icon>
);

export default Snooze;