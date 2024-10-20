
import { Icon } from "../../index";

/**
 * A component that renders the `sword` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sword?s=sharp-thin sword}
 * @preview ![sword](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sword.svg)
 */
const Sword: typeof Icon = x => (
    <Icon {...x}>
        <path d="M262.6 345.4L496 112l13.6-95.5L512 0 495.5 2.4 400 16 166.6 249.4l11.3 11.3L407.5 31.1l85.6-12.2-12.2 85.6L251.3 334.1l11.3 11.3zm-153-119l-5.7-5.7-5.7 5.7-32 32-4.4 4.4 3.2 5.4 44.8 74.6L68.7 384 32 384l-3.3 0-2.3 2.3L5.5 407.1l-5.7 5.7 5.7 5.7 88 88 5.7 5.7 5.7-5.7 20.8-20.8 2.3-2.3 0-3.3 0-36.7 41.2-41.2 74.6 44.8 5.4 3.2 4.4-4.4 32-32 5.7-5.7-5.7-5.7-176-176zm17.2 113.5L82.1 265.2 104 243.3 268.7 408l-21.9 21.9-74.6-44.8-5.4-3.2-4.4 4.4-48 48-2.3 2.3 0 3.3 0 36.7L99.2 489.5 22.5 412.8 35.3 400 72 400l3.3 0 2.3-2.3 48-48 4.4-4.4-3.2-5.4z" />
    </Icon>
);

export default Sword;