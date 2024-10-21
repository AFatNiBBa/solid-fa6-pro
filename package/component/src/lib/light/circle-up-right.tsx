
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up-right?s=light circle-up-right}
 * @preview ![circle-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-up-right.svg)
 */
const CircleUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm80 184c0-4.4-3.6-8-8-8l-113.4 0c-3.7 0-6.6 3-6.6 6.6c0 1.8 .7 3.4 1.9 4.7l25.4 25.4c6.2 6.2 6.2 16.4 0 22.6l-59.1 59.1c-3.6 3.6-4.9 9-3.3 13.9c.7 2 1.8 3.8 3.3 5.3l22.1 22.1c1.5 1.5 3.3 2.6 5.3 3.3c4.9 1.6 10.3 .4 13.9-3.3l59.1-59.1c6.2-6.2 16.4-6.2 22.6 0l25.4 25.4c1.2 1.2 2.9 1.9 4.7 1.9c3.7 0 6.6-3 6.6-6.6L336 184zm-8-40c22.1 0 40 17.9 40 40l0 113.4c0 21.3-17.3 38.6-38.6 38.6c-10.2 0-20.1-4.1-27.3-11.3L288 310.6l-47.7 47.7c-12.2 12.2-30.3 16.5-46.7 11c-6.7-2.2-12.8-6-17.8-11l-22.1-22.1c-5-5-8.8-11.1-11-17.8c-5.5-16.4-1.2-34.5 11-46.7L201.4 224l-14.1-14.1c-7.2-7.2-11.3-17.1-11.3-27.3c0-21.3 17.3-38.6 38.6-38.6L328 144z" />
    </Icon>
);

export default CircleUpRight;