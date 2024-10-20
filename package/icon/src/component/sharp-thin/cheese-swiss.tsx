
import { Icon } from "../../index";

/**
 * A component that renders the `cheese-swiss` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese-swiss?s=sharp-thin cheese-swiss}
 * @preview ![cheese-swiss](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cheese-swiss.svg)
 */
const CheeseSwiss: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 272l0 192 480 0 0-192-80 0c0 26.5-21.5 48-48 48s-48-21.5-48-48L16 272zm480-16c0-113.1-90.2-205.1-202.6-207.9l-64 49.8c20 5.8 34.6 24.2 34.6 46.1c0 26.5-21.5 48-48 48c-26 0-47.1-20.6-48-46.4L26.1 256l296.7 0c6.6-18.6 24.4-32 45.3-32s38.7 13.4 45.3 32l82.7 0zM368 240a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM186.7 131c-1.8 4-2.7 8.4-2.7 13c0 17.7 14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32c-1.8 0-3.6 .2-5.4 .4L186.7 131zm16.9-33.4L288 32c123.7 0 224 100.3 224 224l0 208 0 16-16 0L16 480 0 480l0-16L0 256 174.1 120.6l29.6-23zM176 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default CheeseSwiss;