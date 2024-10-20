
import { Icon } from "../../index";

/**
 * A component that renders the `bicycle` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bicycle?s=light bicycle}
 * @preview ![bicycle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bicycle.svg)
 */
const Bicycle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M304 32c-8.8 0-16 7.2-16 16s7.2 16 16 16l38.3 0 50.5 96-169.4 0-33.7-56.2c-2.9-4.8-8.1-7.8-13.7-7.8l-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l54.9 0L197 178.2l-26.5 53.1c-13.3-4.7-27.6-7.2-42.5-7.2C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112l65 0c5.9 0 11.2-3.2 14-8.3l83.4-152.9 21.2 40.3C405.6 270.2 384 308.6 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-15.8 0-31 2.9-45 8.1L368.4 44.8C364.3 36.9 356.1 32 347.2 32L304 32zM453.8 275.7l44.1 83.8c4.1 7.8 13.8 10.8 21.6 6.7s10.8-13.8 6.7-21.6l-44.1-83.8c9.4-3.1 19.5-4.8 29.9-4.8c53 0 96 43 96 96s-43 96-96 96s-96-43-96-96c0-31.1 14.8-58.8 37.8-76.3zM156 260.2l-40 80.1c-6.4 12.8 2.9 27.8 17.2 27.8l89.5 0c-7.6 45.4-47.1 80-94.7 80c-53 0-96-43-96-96s43-96 96-96c9.8 0 19.2 1.5 28 4.2zM153.9 336l62.7-125.3L291.7 336l-137.9 0zm88.8-144L389 192 319.3 319.8 242.7 192z" />
    </Icon>
);

export default Bicycle;