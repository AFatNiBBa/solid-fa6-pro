
import { Icon } from "../../index";

/**
 * A component that renders the `lightbulb-message` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-message?s=solid lightbulb-message}
 * @preview ![lightbulb-message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/lightbulb-message.svg)
 */
const LightbulbMessage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 288l0 96-144 0c-9.6-31.9-29.5-59.1-49.2-86.2c0 0 0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 16.6-2.3 32.7-6.6 48L320 224c-35.3 0-64 28.7-64 64zM112 416l144 0c0 14.4 4.8 27.7 12.8 38.4C259.1 487.7 228.4 512 192 512c-44.2 0-80-35.8-80-80l0-16zm0-240c0-44.2 35.8-80 80-80c8.8 0 16-7.2 16-16s-7.2-16-16-16C130.1 64 80 114.1 80 176c0 8.8 7.2 16 16 16s16-7.2 16-16zm432 80c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-64 0 0 48c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5L393.4 448 320 448c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l224 0z" />
    </Icon>
);

export default LightbulbMessage;