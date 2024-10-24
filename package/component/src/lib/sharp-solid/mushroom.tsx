
import { Icon } from "../../index";

/**
 * A component that renders the `mushroom` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mushroom?s=sharp-solid mushroom}
 * @preview ![mushroom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mushroom.svg)
 */
const Mushroom: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 272C16 139.5 123.5 32 256 32s240 107.5 240 240l0 24 0 24-24 0L40 320l-24 0 0-24 0-24zM413.3 161.9c-4.2-1.2-8.7-1.9-13.3-1.9c-26.5 0-48 21.5-48 48s21.5 48 48 48c19 0 35.4-11 43.2-27c-5.6-24.5-15.9-47.2-29.9-67.1zM146.2 114.5c8.4 35.3 40 61.5 77.8 61.5c44.2 0 80-35.8 80-80c0-3.4-.2-6.8-.6-10.1C288.2 82 272.3 80 256 80c-40.9 0-78.7 12.8-109.8 34.5zM160 480l32-128 128 0 32 128-192 0zm0-256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Mushroom;