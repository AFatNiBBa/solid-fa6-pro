
import { Icon } from "../../index";

/**
 * A component that renders the `star` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star?s=sharp-light star}
 * @preview ![star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/star.svg)
 */
const Star: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M374.6 164L306.1 34.3 288.1 0 270 34.3 201.5 164 57.1 189l-38.2 6.6 27 27.8L148.1 328.5 127.2 473.6 121.7 512l34.8-17.1 131.6-64.7 131.6 64.7L454.4 512l-5.5-38.4L428 328.5 530.2 223.4l27-27.8L519 189 374.6 164zM492 216.8l-86.9 89.4-11 11.3 2.2 15.6 17.8 123.5-111.9-55-14.1-6.9-14.1 6.9L162 456.5l17.8-123.5 2.2-15.6-11-11.3L84.1 216.8 207 195.5l15.5-2.7 7.3-13.9L288.1 68.6l58.2 110.3 7.3 13.9 15.5 2.7L492 216.8z" />
    </Icon>
);

export default Star;