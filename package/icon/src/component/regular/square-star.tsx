
import { Icon } from "../../index";

/**
 * A component that renders the `square-star` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-star?s=regular square-star}
 * @preview ![square-star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-star.svg)
 */
const SquareStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 25c6.1 0 11.7 3.5 14.3 8.9l31.3 63.3 69.9 10.2c6 .9 11 5.1 12.9 10.9s.3 12.2-4 16.4L297.8 280l11.9 69.6c1 6-1.4 12.1-6.4 15.6s-11.5 4.1-16.8 1.2L224 333.6l-62.5 32.9c-5.4 2.8-11.9 2.4-16.9-1.2s-7.4-9.6-6.4-15.6L150.2 280 99.7 230.7c-4.4-4.3-5.9-10.6-4-16.4s6.9-10 12.9-10.9l69.9-10.2 31.3-63.3c2.7-5.5 8.3-8.9 14.3-8.9z" />
    </Icon>
);

export default SquareStar;