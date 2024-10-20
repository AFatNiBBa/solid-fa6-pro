
import { Icon } from "../../index";

/**
 * A component that renders the `pen-line` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-line?s=solid pen-line}
 * @preview ![pen-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/pen-line.svg)
 */
const PenLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M453.3 19.3l39.4 39.4c25 25 25 65.5 0 90.5l-48.4 48.4L314.3 67.7l48.4-48.4c25-25 65.5-25 90.5 0zM58.6 323.5L291.7 90.3 421.7 220.3 188.5 453.4c-10.4 10.4-23.3 18-37.4 22.2L30.8 511c-8.4 2.5-17.5 .2-23.7-6.1S-1.5 489.7 1 481.2L36.4 360.9c4.2-14.1 11.8-27 22.2-37.4zM248 464l304 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-304 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default PenLine;