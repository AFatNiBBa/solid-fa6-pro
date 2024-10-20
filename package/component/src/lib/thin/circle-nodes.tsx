
import { Icon } from "../../index";

/**
 * A component that renders the `circle-nodes` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-nodes?s=thin circle-nodes}
 * @preview ![circle-nodes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-nodes.svg)
 */
const CircleNodes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 80A64 64 0 1 0 336 80a64 64 0 1 0 128 0zm16 0c0 44.2-35.8 80-80 80c-2.1 0-4.3-.1-6.4-.2L358.1 355.1c33.4 9.6 57.9 40.4 57.9 76.9c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-17.3 5.5-33.3 14.8-46.4L134.6 266.4C120.3 279.8 101.1 288 80 288c-44.2 0-80-35.8-80-80s35.8-80 80-80c30.8 0 57.6 17.4 70.9 43l172.2-68.9c-2-7-3.1-14.5-3.1-22.1c0-44.2 35.8-80 80-80s80 35.8 80 80zM329 117L156.9 185.9c2 7 3.1 14.5 3.1 22.1c0 17.3-5.5 33.3-14.8 46.4L281.4 373.6C295.7 360.2 314.9 352 336 352c2.1 0 4.3 .1 6.4 .2l35.5-195.3c-21.2-6.1-38.8-20.7-48.8-39.9zm71 315a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM80 272a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default CircleNodes;