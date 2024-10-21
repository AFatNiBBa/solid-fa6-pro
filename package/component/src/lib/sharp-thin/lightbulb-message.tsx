
import { Icon } from "../../index";

/**
 * A component that renders the `lightbulb-message` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-message?s=sharp-thin lightbulb-message}
 * @preview ![lightbulb-message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/lightbulb-message.svg)
 */
const LightbulbMessage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M368 176c0 16.6-2.3 32.7-6.6 48l-16.7 0c4.8-15.1 7.3-31.3 7.3-48c0-88.4-71.6-160-160-160S32 87.6 32 176c0 33.9 10.5 65.3 28.5 91.2c4.5 6.5 9.5 13.3 14.5 20.2c0 0 0 0 0 0s0 0 0 0c12.5 17.2 25.9 35.5 36.3 54.4c7.4 13.5 11.6 27.8 14 42.2L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176zM112 416l16 0 128 0 0 16-128 0 0 64 128 0 0 16-128 0-16 0 0-16 0-64 0-16zM184 80c-48.6 0-88 39.4-88 88l-16 0c0-57.4 46.6-104 104-104l0 16zM480 448l0 16 0 26.9 0 21.1-16-13.7L405.3 448 304 448l-16 0 0-16 0-160 0-16 16 0 256 0 16 0 0 16 0 160 0 16-16 0-64 0-16 0zm0-16l80 0 0-160-256 0 0 160 101.3 0 5.9 0 4.5 3.9L464 477.2l0-29.2 0-16 16 0z" />
    </Icon>
);

export default LightbulbMessage;