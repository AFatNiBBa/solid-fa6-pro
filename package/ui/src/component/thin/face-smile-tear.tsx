
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile-tear` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-tear?s=thin face-smile-tear}
 * @preview ![face-smile-tear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-smile-tear.svg)
 */
const FaceSmileTear: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm80-202.7c5.9 7.7 12.6 16.6 18.5 26.1c8.6 13.8 13.5 25.5 13.5 33.6c0 16.8-14 31-32 31s-32-14.2-32-31c0-8.1 4.8-19.9 13.4-33.6c6-9.5 12.7-18.5 18.5-26.1zm6.4-18c-3.2-4.4-9.6-4.4-12.8 0c-1.2 1.6-2.5 3.3-3.9 5.1c-14.2 18.4-37.7 49-37.7 72.7c0 26 21.5 47 48 47s48-21 48-47c0-23.4-23.1-53.5-37.2-72c-1.6-2.1-3.1-4-4.4-5.8zM176.4 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm176-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM150.6 323.4c-2.5-3.6-7.5-4.5-11.1-2s-4.5 7.5-2 11.1c22.4 32 61.9 67.4 118.6 67.4c4.4 0 8-3.6 8-8s-3.6-8-8-8c-49.4 0-84.6-30.8-105.4-60.6z" />
    </Icon>
);

export default FaceSmileTear;