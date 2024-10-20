
import { Icon } from "../../index";

/**
 * A component that renders the `lightbulb-message` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-message?s=sharp-regular lightbulb-message}
 * @preview ![lightbulb-message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/lightbulb-message.svg)
 */
const LightbulbMessage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M310.7 224c6-14.8 9.3-31 9.3-48c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 16.6-2.3 32.7-6.6 48l-50.7 0zM256 416l0 96-144 0 0-96 80 0 64 0zM144 176l-32 0c0-44.2 35.8-80 80-80l0 32c-26.5 0-48 21.5-48 48zm432 80l0 192-96 0 0 64-74.7-64L288 448l0-192 288 0z" />
    </Icon>
);

export default LightbulbMessage;