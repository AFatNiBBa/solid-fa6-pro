
import { Icon } from "../../index";

/**
 * A component that renders the `link-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-slash?s=sharp-regular link-slash}
 * @preview ![link-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/link-slash.svg)
 */
const LinkSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7-131-101.7 90.4-90.4c56.2-56.2 56.2-147.3 0-203.5C526.8 10.2 440.9 7.3 383.9 57.2l-6.1 5.4 31.6 36.1 6.1-5.4c38-33.2 95.2-31.3 130.9 4.4c37.4 37.4 37.4 98.1 0 135.6l-94.7 94.7-45.8-35.6c24-53.2 13.9-117.6-29.4-160.9c-52.4-52.4-135.1-55.9-191.6-10.7L48.4 14.8zM224.5 151.5c36.9-22.8 86-18.2 118 13.9c25.9 25.9 34 63.2 23.8 96.2L224.5 151.5zM352.6 373.8c-20.2-2.7-39.7-11.7-55.2-27.3c-9.8-9.8-17-21.2-21.7-33.3l-54.2-42.7c-2.2 39.6 11.9 79.9 41.9 109.9c38.8 38.8 94.2 50.8 143.4 36l-54.2-42.7zm-236-186L59.7 244.8C3.5 301 3.5 392.1 59.7 448.2c53.6 53.6 139.5 56.4 196.5 6.5l6.1-5.4-31.6-36.1-6.1 5.4c-38 33.2-95.2 31.3-130.9-4.4c-37.4-37.4-37.4-98.1 0-135.6l60.9-60.9-38-29.9z" />
    </Icon>
);

export default LinkSlash;