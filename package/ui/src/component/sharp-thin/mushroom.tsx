
import { Icon } from "../../index";

/**
 * A component that renders the `mushroom` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mushroom?s=sharp-thin mushroom}
 * @preview ![mushroom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mushroom.svg)
 */
const Mushroom: typeof Icon = x => (
    <Icon {...x}>
        <path d="M136 82.8c13 26.7 40.3 45.2 72 45.2c43.4 0 78.8-34.6 80-77.7c-10.4-1.5-21.1-2.3-32-2.3c-44.2 0-85.3 12.8-120 34.8zM122.7 92C67.6 132.8 32 198.2 32 272l0 32 448 0 0-32c0-25.9-4.4-50.8-12.5-74c-11.7 15.8-30.4 26-51.5 26c-35.3 0-64-28.7-64-64c0-29 19.3-53.6 45.8-61.4c-26.8-22-58.9-37.8-94-45.5C301.2 103.8 259.3 144 208 144c-37.2 0-69.4-21.1-85.3-52zm290.2 20.1c-25 1.6-44.9 22.4-44.9 47.9c0 26.5 21.5 48 48 48c19.7 0 36.5-11.8 44-28.7c-11.5-25.3-27.5-48-47.1-67.2zM496 272l0 32 0 16-16 0L32 320l-16 0 0-16 0-32C16 139.5 123.5 32 256 32s240 107.5 240 240zM168.5 442.1L185.4 352l16.3 0-17.4 93.1L180.7 464l19.3 0 112 0 19.3 0-3.6-18.9L310.3 352l16.3 0 16.9 90.1 4.1 21.9 3 16-16.3 0L312 480l-112 0-22.3 0-16.3 0 3-16 4.1-21.9zM128 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default Mushroom;