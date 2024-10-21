
import { Icon } from "../../index";

/**
 * A component that renders the `link-slash` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-slash?s=regular link-slash}
 * @preview ![link-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/link-slash.svg)
 */
const LinkSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L489.3 358.2l91-91c56.2-56.2 56.2-147.3 0-203.5C526.8 10.2 440.9 7.3 383.9 57.2l-6.1 5.4c-10 8.7-11 23.9-2.3 33.9s23.9 11 33.9 2.3l6.1-5.4c38-33.2 95.2-31.3 130.9 4.4c37.4 37.4 37.4 98.1 0 135.6l-95.1 95.1-45.5-35.7c24.2-53.3 14.1-117.9-29.3-161.3c-52.1-52.1-134.4-55.9-190.8-11.2L38.8 5.1zm186.3 146c36.9-22.3 85.6-17.6 117.4 14.3c26 26 34 63.3 23.7 96.4L225.1 151.1zM352.6 373.8c-20.2-2.7-39.7-11.7-55.2-27.3c-9.8-9.8-17-21.2-21.7-33.3l-54.2-42.7c-2.2 39.6 11.9 79.9 41.9 109.9c38.8 38.8 94.2 50.8 143.4 36l-54.2-42.7zm-236-186L59.7 244.8C3.5 301 3.5 392.1 59.7 448.2c53.6 53.6 139.5 56.4 196.5 6.5l6.1-5.4c10-8.7 11-23.9 2.3-33.9s-23.9-11-33.9-2.3l-6.1 5.4c-38 33.2-95.2 31.3-130.9-4.4c-37.4-37.4-37.4-98.1 0-135.6l60.9-60.9-38-29.9z" />
    </Icon>
);

export default LinkSlash;