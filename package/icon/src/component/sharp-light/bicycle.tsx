
import { Icon } from "../../index";

/**
 * A component that renders the `bicycle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bicycle?s=sharp-light bicycle}
 * @preview ![bicycle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bicycle.svg)
 */
const Bicycle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M304 32l-16 0 0 32 16 0 38.3 0 50.5 96-169.4 0-33.7-56.2L185.1 96 176 96l-64 0L96 96l0 32 16 0 54.9 0L197 178.2l-26.5 53.1c-13.3-4.7-27.6-7.2-42.5-7.2C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112l65 0 9.5 0 4.5-8.3 83.4-152.9 21.2 40.3C405.6 270.2 384 308.6 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-15.8 0-31 2.9-45 8.1L366.2 40.5 361.7 32 352 32l-48 0zM453.8 275.7l44.1 83.8 7.5 14.2 28.3-14.9-7.4-14.2-44.1-83.8c9.4-3.1 19.5-4.8 29.9-4.8c53 0 96 43 96 96s-43 96-96 96s-96-43-96-96c0-31.1 14.8-58.8 37.8-76.3zM156 260.2l-42.3 84.7L128 368l94.7 0c-7.6 45.4-47.1 80-94.7 80c-53 0-96-43-96-96s43-96 96-96c9.8 0 19.2 1.5 28 4.2zM224 336l-70.1 0 62.7-125.3L291.7 336 256 336l-32 0zm18.7-144L389 192 319.3 319.8 242.7 192z" />
    </Icon>
);

export default Bicycle;