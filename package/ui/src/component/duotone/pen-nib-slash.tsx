
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-nib-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-nib-slash?s=duotone pen-nib-slash}
 * @preview ![pen-nib-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pen-nib-slash.svg)
 */
const PenNibSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M66.1 456c0 8.2 3.1 16.2 9 22.3L228.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-9.4 2.7-18.2 7.4-25.7l-85-67L67.8 445.8c-1.1 3.3-1.7 6.8-1.7 10.2zm31.6 44.9c6.1 5.9 14.1 9 22.3 9c3.4 0 6.8-.5 10.2-1.7l264.3-88.6c3.6-1.2 7.1-2.8 10.5-4.6l-98.5-77.6c-8.7 9-20.9 14.6-34.4 14.6c-7.4 0-14.4-1.7-20.7-4.7L97.7 500.9zM208.1 137.8c80.8 63.3 161.5 126.6 242.3 189.9l28.3-94.4 2.7-9.2L352 94.6l-9.2 2.8L208.1 137.8zM376.7 74.1L501.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L511.6 18.3C500.7 7.4 486.3 1.9 472 1.9s-28.7 5.5-39.6 16.4L376.7 74.1z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default PenNibSlash;