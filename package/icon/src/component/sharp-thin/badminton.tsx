
import { Icon } from "../../index";

/**
 * A component that renders the `badminton` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/badminton?s=sharp-thin badminton}
 * @preview ![badminton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/badminton.svg)
 */
const Badminton: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M349 16c39.2 0 77 13.5 105.3 41.8S496 123.8 496 163c0 49.6-21.5 101.9-62.3 142.7c-72.2 72.2-183.4 85.1-248 20.5C157.5 297.9 144 260.2 144 221c0-49.6 21.5-101.9 62.3-142.7S299.3 16 349 16zm0-16c-54.2 0-110.5 23.4-154 66.9s-67 99.8-66.9 154c0 40.3 13.1 79.8 40.9 110.8l-34.6 34.6-19-19L104 336 92.7 347.3 11.3 428.7 0 440l11.3 11.3 49.4 49.4L72 512l11.3-11.3 81.4-81.4L176 408l-11.3-11.3-19-19 34.6-34.6c73.3 66.3 190.4 48.3 264.8-26c43.6-43.6 67-99.8 66.9-154c0-42.8-14.8-84.9-46.5-116.6S391.8 0 349 0zM104 358.6L153.4 408 72 489.4 22.6 440 104 358.6zM512 368c17.7 0 32 14.3 32 32l0 32-64 0 0-32c0-17.7 14.3-32 32-32zm48 64l0-32c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 32 0 16 16 0 64 0 16 0 0-16zM448 506.6l15.4 4.4 13.4-47-16.6 0L448 506.6zm56-2.6l0 8 16 0 0-8 0-40-16 0 0 40zm56.6 7l15.4-4.4L563.8 464l-16.6 0 13.4 47z" />
    </Icon>
);

export default Badminton;