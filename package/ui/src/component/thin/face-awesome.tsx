
import { Icon } from "../../index";

/**
 * A component that renders the `face-awesome` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-awesome?s=thin face-awesome}
 * @preview ![face-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-awesome.svg)
 */
const FaceAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 208c0 8.8-7.2 16-16 16l-80 0c-8.8 0-16-7.2-16-16l0-16c0-30.9 25.1-56 56-56c.9 0 1.8 0 2.8 .1c-6.6 5.9-10.8 14.4-10.8 23.9c0 17.7 14.3 32 32 32c12.8 0 23.8-7.5 28.9-18.3c2 5.7 3.1 11.9 3.1 18.3l0 16zm-56-88c-39.8 0-72 32.2-72 72l0 16c0 17.7 14.3 32 32 32l80 0c17.7 0 32-14.3 32-32l0-16c0-39.8-32.2-72-72-72zm40 40a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm184 8a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm-21.2-39.9c-6.6 5.9-10.8 14.4-10.8 23.9c0 17.7 14.3 32 32 32c15.1 0 27.8-10.5 31.1-24.5c5.6 9.5 8.9 20.7 8.9 32.5l0 17.9c0 7.8-6.3 14.1-14.1 14.1l-99.8 0c-7.8 0-14.1-6.3-14.1-14.1l0-17.9c0-35.3 28.7-64 64-64c.9 0 1.8 0 2.8 .1zM256 192l0 17.9c0 16.6 13.5 30.1 30.1 30.1l99.8 0c16.6 0 30.1-13.5 30.1-30.1l0-17.9c0-44.2-35.8-80-80-80s-80 35.8-80 80zm4.7 240L248 432c-2.1 0-4.3 0-6.4-.1c7.5-36.4 39.7-63.9 78.4-63.9c17.7 0 34.1 5.8 47.3 15.5c-6.1 7.5-13.1 14.3-20.7 20.3c-24.2 17.7-53.9 28.2-86 28.2zm-35.1-1.6C154 420.2 96.9 361.8 89.5 288l305 0c6.4 0 11.4 5.5 10.8 11.9c-2.4 26.9-12.1 51.5-26.9 72C362.3 359.4 342 352 320 352c-47 0-86.1 33.8-94.4 78.4zm130.7-13.8c36-26.5 60.7-67.7 65-115.3c1.4-15.7-11-29.3-26.8-29.3L88.1 272c-8.6 0-15.4 7.5-14.6 16c8.2 90.2 83.9 160 174.5 160l12.7 0 4.7 0c34.2 0 65.8-11.7 90.9-31.4z" />
    </Icon>
);

export default FaceAwesome;