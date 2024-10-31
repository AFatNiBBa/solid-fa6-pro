
import { Icon } from "../../index";

/**
 * A component that renders the `eye-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-slash?s=sharp-light eye-slash}
 * @preview ![eye-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/eye-slash.svg)
 */
const EyeSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M40.4 18L27.8 8.1 8.1 33.4l12.6 9.8L599.8 494.3l12.6 9.8 19.7-25.2L619.5 469 40.4 18zM608 256C578 181.3 478.4 32 320 32c-50.2 0-94.5 15-132.5 37.8l27.1 21.4C245.9 74.4 281.1 64 320 64c68.4 0 125.4 32.1 170 75c39.8 38.3 67.9 83.7 83.2 117c-10.5 22.8-27 51.4-49.3 79.4L549 355.3c28.4-35.8 48.2-72.4 59-99.3zM91 156.7C62.6 192.5 42.8 229.1 32 256c30 74.7 129.6 224 288 224c50.2 0 94.5-15 132.5-37.8l-27.1-21.4C394.1 437.6 358.9 448 320 448c-68.4 0-125.4-32.1-170-75c-39.8-38.3-67.9-83.7-83.2-117c10.5-22.8 27-51.4 49.3-79.4L91 156.7zM320 384c16.7 0 32.7-3.2 47.4-9.1l-30.9-24.4c-5.4 .9-10.9 1.4-16.5 1.4c-51 0-92.8-39.8-95.8-90.1l-30.9-24.4c-.9 6-1.3 12.2-1.3 18.5c0 70.7 57.3 128 128 128zM448 256c0-70.7-57.3-128-128-128c-16.7 0-32.7 3.2-47.4 9.1l30.9 24.4c5.4-.9 10.9-1.4 16.5-1.4c51 0 92.8 39.8 95.8 90.1l30.9 24.4c.9-6 1.3-12.2 1.3-18.5z" />
    </Icon>
);

export default EyeSlash;