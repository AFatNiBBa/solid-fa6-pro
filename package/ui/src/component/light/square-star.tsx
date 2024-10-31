
import { Icon } from "../../index";

/**
 * A component that renders the `square-star` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-star?s=light square-star}
 * @preview ![square-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-star.svg)
 */
const SquareStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm238.3 16.9l36.2 73.4 81.1 11.8c6 .9 11 5.1 12.9 10.9s.3 12.2-4 16.4l-58.6 57.2 13.8 80.7c1 6-1.4 12.1-6.4 15.6s-11.5 4.1-16.8 1.2L224 342.1l-72.5 38.1c-5.4 2.8-11.9 2.4-16.8-1.2s-7.4-9.6-6.4-15.6l13.8-80.7L83.5 225.4c-4.4-4.3-5.9-10.6-4-16.4s6.9-10 12.9-10.9l81-11.8 36.2-73.4c2.7-5.5 8.3-8.9 14.3-8.9s11.7 3.5 14.3 8.9zm-40 95.1c-2.3 4.7-6.8 8-12 8.8L129 225.1l41.5 40.4c3.8 3.7 5.5 9 4.6 14.2l-9.8 57.1 51.2-26.9c4.7-2.5 10.2-2.5 14.9 0l51.2 26.9-9.8-57.1c-.9-5.2 .8-10.5 4.6-14.2L319 225.1l-57.3-8.3c-5.2-.8-9.7-4-12-8.8L224 156.2l-25.6 51.9z" />
    </Icon>
);

export default SquareStar;