
import { Icon } from "../../index";

/**
 * A component that renders the `stamp` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stamp?s=sharp-thin stamp}
 * @preview ![stamp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/stamp.svg)
 */
const Stamp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M309.3 155.6l-5.3 4.8 0 7.2 0 88.4 0 16 16 0 96 0c44.2 0 80 35.8 80 80l0 48L16 400l0-48c0-44.2 35.8-80 80-80l96 0 16 0 0-16 0-88.4 0-7.2-5.3-4.8C186.3 141 176 119.7 176 96c0-44.2 35.8-80 80-80s80 35.8 80 80c0 23.7-10.3 45-26.7 59.6zM512 416l0-16 0-48c0-53-43-96-96-96l-80 0-16 0 0-16 0-72.4c19.6-17.6 32-43.1 32-71.6c0-53-43-96-96-96s-96 43-96 96c0 28.4 12.4 54 32 71.6l0 72.4 0 16-16 0-80 0c-53 0-96 43-96 96l0 48 0 16 16 0 480 0 16 0zM48 456l0-8-16 0 0 8 0 48 0 8 8 0 432 0 8 0 0-8 0-48 0-8-16 0 0 8 0 40L48 496l0-40z" />
    </Icon>
);

export default Stamp;