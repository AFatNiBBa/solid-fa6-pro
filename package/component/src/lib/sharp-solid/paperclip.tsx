
import { Icon } from "../../index";

/**
 * A component that renders the `paperclip` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paperclip?s=sharp-solid paperclip}
 * @preview ![paperclip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/paperclip.svg)
 */
const Paperclip: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M325.5 60c-16.6 0-32.5 6.6-44.2 18.3L91.6 268C71.4 288.2 60 315.7 60 344.2C60 403.8 108.2 452 167.8 452c28.6 0 56-11.4 76.2-31.6L404.2 260.2l39.6 39.6L283.6 460c-30.7 30.7-72.4 48-115.8 48C77.3 508 4 434.7 4 344.2c0-43.4 17.3-85.1 48-115.8L241.7 38.7C263.9 16.5 294.1 4 325.5 4C390.9 4 444 57.1 444 122.5c0 31.4-12.5 61.6-34.7 83.8L225.1 390.5c-13.7 13.7-32.4 21.5-51.8 21.5c-40.5 0-73.3-32.8-73.3-73.3c0-19.4 7.7-38.1 21.5-51.8L284.2 124.2l39.6 39.6L161.1 326.5c-3.2 3.2-5.1 7.6-5.1 12.2c0 9.5 7.7 17.3 17.3 17.3c4.6 0 9-1.8 12.2-5.1L369.7 166.7C381.4 155 388 139.1 388 122.5C388 88 360 60 325.5 60z" />
    </Icon>
);

export default Paperclip;