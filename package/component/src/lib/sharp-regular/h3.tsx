
import { Icon } from "../../index";

/**
 * A component that renders the `h3` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h3?s=sharp-regular h3}
 * @preview ![h3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/h3.svg)
 */
const H3: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 88l0-24L0 64 0 88 0 248 0 424l0 24 48 0 0-24 0-152 224 0 0 152 0 24 48 0 0-24 0-176 0-160 0-24-48 0 0 24 0 136L48 224 48 88zM600 64L400 64l-24 0 0 48 24 0 142.1 0L423 231l-7 7 0 33.9 24 0 88 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-70.6 0c-16.1 0-29.8-12-31.8-28L423.8 357l-47.6 6 1.9 14.9c5 40 39 70.1 79.4 70.1l70.6 0c53.6 0 98.4-37.7 109.4-88l2.6 0 0-24c0-61.9-50.1-112-112-112l-30.1 0L617 105l7-7L624 64l-24 0z" />
    </Icon>
);

export default H3;