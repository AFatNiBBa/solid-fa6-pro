
import { Icon } from "../../index";

/**
 * A component that renders the `ear` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ear?s=thin ear}
 * @preview ![ear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ear.svg)
 */
const Ear: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 192c0-97.2-78.8-176-176-176S16 94.8 16 192l0 176c0 70.7 57.3 128 128 128s128-57.3 128-128c0-11.1 5.6-21.7 15.2-27.9c48.7-31.3 80.8-86 80.8-148.1zm16 0c0 67.8-35.1 127.4-88.2 161.5c-4.9 3.2-7.8 8.6-7.8 14.5c0 79.5-64.5 144-144 144S0 447.5 0 368L0 192C0 86 86 0 192 0S384 86 384 192zM80 192l0 14.3c0 13.4 6.7 25.9 17.8 33.3l8.9 5.9c13.3 8.9 21.3 23.8 21.3 39.8c0 14.2-6.3 27.7-17.2 36.8L77.1 350.1c-3.4 2.8-8.4 2.4-11.3-1s-2.4-8.4 1-11.3l33.7-28c7.3-6.1 11.5-15 11.5-24.5c0-10.7-5.3-20.6-14.2-26.5l-8.9-5.9C73.4 242.5 64 225 64 206.3L64 192c0-70.7 57.3-128 128-128s128 57.3 128 128l0 8c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-8c0-61.9-50.1-112-112-112S80 130.1 80 192z" />
    </Icon>
);

export default Ear;