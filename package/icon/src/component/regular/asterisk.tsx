
import { Icon } from "../../index";

/**
 * A component that renders the `asterisk` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/asterisk?s=regular asterisk}
 * @preview ![asterisk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/asterisk.svg)
 */
const Asterisk: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 32c13.3 0 24 10.7 24 24l0 156.9 131.4-81.3c11.3-7 26.1-3.5 33 7.8s3.5 26.1-7.8 33L237.6 256l135 83.6c11.3 7 14.7 21.8 7.8 33s-21.8 14.7-33 7.8L216 299.1 216 456c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-156.9L36.6 380.4c-11.3 7-26.1 3.5-33-7.8s-3.5-26.1 7.8-33l135-83.6-135-83.6c-11.3-7-14.8-21.8-7.8-33s21.8-14.8 33-7.8L168 212.9 168 56c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default Asterisk;