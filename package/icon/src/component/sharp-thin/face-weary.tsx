
import { Icon } from "../../index";

/**
 * A component that renders the `face-weary` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-weary?s=sharp-thin face-weary}
 * @preview ![face-weary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-weary.svg)
 */
const FaceWeary: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM256 368c39 0 75.9 7.4 108.6 20.7C352.5 340 308.4 304 256 304s-96.5 36-108.6 84.7C180.1 375.4 217 368 256 368zm0 16c-40.7 0-78.8 8.5-111.7 23.4c-5.6 2.5-11 5.3-16.3 8.1c0-6.4 .5-12.7 1.4-18.8C138.7 335.2 191.8 288 256 288s117.3 47.2 126.6 108.8c.9 6.1 1.4 12.4 1.4 18.8c-5.3-2.9-10.7-5.6-16.3-8.1C334.8 392.5 296.7 384 256 384zM211.3 176l-5.7 5.7-7.4 7.4c-22.4 22.4-51.2 37.2-82.5 42.5l-2.5 .4-7.9 1.3-2.6-15.8 7.9-1.3 2.5-.4c28-4.7 53.8-17.9 73.8-38l7.4-7.4 5.7-5.7L211.3 176zm95 5.7l-5.7-5.7L312 164.7l5.7 5.7 7.4 7.4c20 20 45.8 33.3 73.8 38l2.5 .4 7.9 1.3-2.6 15.8-7.9-1.3-2.5-.4c-31.3-5.2-60.1-20.1-82.5-42.5l-7.4-7.4z" />
    </Icon>
);

export default FaceWeary;