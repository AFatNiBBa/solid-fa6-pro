
import { Icon } from "../../index";

/**
 * A component that renders the `socks` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/socks?s=sharp-regular socks}
 * @preview ![socks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/socks.svg)
 */
const Socks: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 0L176 0 128 0l0 48 0 48 0 24 0 24 0 128L38.4 339.2C14.2 357.3 0 385.8 0 416c0 53 43 96 96 96c20.8 0 41-6.7 57.6-19.2l21.6-16.2c-8-14.8-13.1-31.4-14.7-49l-35.7 26.8c-8.3 6.2-18.4 9.6-28.8 9.6c-26.5 0-48-21.5-48-48c0-15.1 7.1-29.3 19.2-38.4L38.4 339.2l28.8 38.4 89.6-67.2L176 296l0-24 0-128 112 0 0-24 0-24L176 96l0-48 112 0 0-48zm80 144l96 0 0 200L316.8 454.4c-8.3 6.2-18.4 9.6-28.8 9.6c-26.5 0-48-21.5-48-48c0-15.1 7.1-29.3 19.2-38.4l89.6-67.2L368 296l0-24 0-128zM320 272l-89.6 67.2C206.2 357.3 192 385.8 192 416c0 53 43 96 96 96c20.8 0 41-6.7 57.6-19.2L512 368l0-224 0-24 0-24 0-48 0-48L464 0 368 0 320 0l0 48 0 48 0 24 0 24 0 128zM368 96l0-48 96 0 0 48-96 0z" />
    </Icon>
);

export default Socks;