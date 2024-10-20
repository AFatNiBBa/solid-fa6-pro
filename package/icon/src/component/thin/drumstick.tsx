
import { Icon } from "../../index";

/**
 * A component that renders the `drumstick` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/drumstick?s=thin drumstick}
 * @preview ![drumstick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/drumstick.svg)
 */
const Drumstick: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 185.9C176 92.1 252.1 16 345.9 16C428.8 16 496 83.2 496 166.1C496 259.9 419.9 336 326.1 336l-97 0c-29.3 0-53.1-23.8-53.1-53.1l0-97zM345.9 0C243.2 0 160 83.2 160 185.9l0 97c0 .6 0 1.2 0 1.8l-45.8 45.8c-3.1 3.1-9.6 3.6-15.7-.3C88.6 323.7 76.7 320 64 320c-35.3 0-64 28.7-64 64s28.7 64 64 64c0 35.3 28.7 64 64 64s64-28.7 64-64c0-12.7-3.7-24.6-10.1-34.6c-3.9-6.1-3.4-12.6-.3-15.7L227.3 352c.6 0 1.2 0 1.8 0l97 0C428.8 352 512 268.8 512 166.1C512 74.4 437.6 0 345.9 0zM208 348.7l-37.7 37.7c-10.3 10.3-8.2 25.8-1.8 35.6c4.8 7.5 7.6 16.4 7.6 25.9c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-8.7-7.3-16-16-16c-26.5 0-48-21.5-48-48s21.5-48 48-48c9.6 0 18.5 2.8 25.9 7.6c9.8 6.3 25.3 8.5 35.6-1.8L163.3 304c6.8 21.2 23.5 37.9 44.7 44.7z" />
    </Icon>
);

export default Drumstick;