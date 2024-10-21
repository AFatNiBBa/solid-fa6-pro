
import { Icon } from "../../index";

/**
 * A component that renders the `star-half` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-half?s=sharp-regular star-half}
 * @preview ![star-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/star-half.svg)
 */
const StarHalf: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M148.1 328.5L129.7 456.3l-8 55.7 51.7-22.2 138.7-59.6 0-344.3 0-85.9-48 71.2L201.6 164 76.2 185.7l-57.3 9.9 40.5 41.7 88.7 91.2zM116.7 227.4l93-16.1 20.2-3.5 11.4-17 22.7-33.7 0 241.5-82.7 35.5 14.2-98.8L199 312l-16.4-16.9-65.8-67.7z" />
    </Icon>
);

export default StarHalf;