
import { Icon } from "../../index";

/**
 * A component that renders the `signal` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal?s=regular signal}
 * @preview ![signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/signal.svg)
 */
const Signal: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 0c13.3 0 24 10.7 24 24l0 464c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-464c0-13.3 10.7-24 24-24zM448 96c13.3 0 24 10.7 24 24l0 368c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-368c0-13.3 10.7-24 24-24zM320 192c13.3 0 24 10.7 24 24l0 272c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-272c0-13.3 10.7-24 24-24zM192 288c13.3 0 24 10.7 24 24l0 176c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-176c0-13.3 10.7-24 24-24zM64 384c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-80c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default Signal;