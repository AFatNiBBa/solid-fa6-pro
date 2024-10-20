
import { Icon } from "../../index";

/**
 * A component that renders the `bow-arrow` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bow-arrow?s=sharp-regular bow-arrow}
 * @preview ![bow-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bow-arrow.svg)
 */
const BowArrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 0L352 32l47 47L149.9 328.2 96 312 38.5 369.4 0 408l52.2 15.7L80 432l8.3 27.8L104 512l38.5-38.6L200 416l-16.2-53.9L433 113l47 47L512 0zM109.7 366.2l22 6.6c.9 1.5 2 2.9 3.3 4.1s2.7 2.4 4.1 3.3l6.6 22-18.9 18.9-.9-3-7.4-24.8L93.8 386l-3-.9 18.9-18.9zm-57-251.5l-.5-.5-17-17L1.3 131.2l17 17L151.4 281.4l33.9-33.9-98-98c61.2-37.6 138.2-39.2 200.8-4.9l35.1-35.1c-82.8-51.7-189.4-50-270.6 5.2zm314.7 109c34.4 62.6 32.7 139.6-4.9 200.8l-98-98-33.9 33.9L363.8 493.8l17 17 33.9-33.9-17-17-.5-.5c55.2-81.2 57-187.8 5.2-270.6l-35.1 35.1z" />
    </Icon>
);

export default BowArrow;