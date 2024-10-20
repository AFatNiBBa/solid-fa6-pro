
import { Icon } from "../../index";

/**
 * A component that renders the `pen-line` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-line?s=regular pen-line}
 * @preview ![pen-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/pen-line.svg)
 */
const PenLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M13.4 439l23-78.1c4.2-14.1 11.8-27 22.2-37.4L362.7 19.3c25-25 65.5-25 90.5 0l39.4 39.4c3.1 3.1 5.9 6.5 8.2 10c16.4 24.8 13.7 58.6-8.2 80.5L188.5 453.4c-1.3 1.3-2.6 2.6-4 3.8c-9.6 8.5-21 14.8-33.4 18.4L73 498.6 30.8 511c-8.4 2.5-17.5 .2-23.7-6.1S-1.5 489.7 1 481.2L13.4 439zm62.2-41.2L59.4 452.6l54.8-16.1 23.4-6.9c6.4-1.9 12.3-5.4 17-10.1L383 191 321 129 92.5 357.4c-.6 .6-1.2 1.2-1.7 1.8c-3.9 4.4-6.7 9.6-8.4 15.2l-6.9 23.4zM248 464l304 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-304 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default PenLine;