
import { Icon } from "../../index";

/**
 * A component that renders the `bench-tree` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bench-tree?s=regular bench-tree}
 * @preview ![bench-tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bench-tree.svg)
 */
const BenchTree: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M578.7 150c-14.7-10.6-22.1-28.5-19.3-46.4c.4-2.5 .6-5 .6-7.6c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 2.6 .2 5.2 .6 7.6c2.8 17.9-4.6 35.8-19.3 46.4c-8.2 5.9-13.3 15.3-13.3 26c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32c0-10.6-5.1-20.1-13.3-26zM608 96c0 5.1-.4 10.2-1.2 15.1C626.9 125.7 640 149.3 640 176c0 44.2-35.8 80-80 80l-24 0 0 232c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-232-24 0c-44.2 0-80-35.8-80-80c0-26.7 13.1-50.3 33.2-64.9c-.8-4.9-1.2-10-1.2-15.1c0-53 43-96 96-96s96 43 96 96zM80 272l224 0 0-32L80 240l0 32zM32 224c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 64c0 14.9-10.2 27.4-24 31l0 33 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 88c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-88L80 400l0 88c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-88-8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-33c-13.8-3.6-24-16.1-24-31l0-64zm72 96l0 32 176 0 0-32-176 0z" />
    </Icon>
);

export default BenchTree;