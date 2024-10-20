
import { Icon } from "../../index";

/**
 * A component that renders the `up` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up?s=light up}
 * @preview ![up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/up.svg)
 */
const Up: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M189.7 64l4.6 0c4.4 0 8.6 1.8 11.6 5L348.5 218.8c2.2 2.3 3.5 5.4 3.5 8.7c0 6.9-5.6 12.6-12.6 12.6L256 240c-8.8 0-16 7.2-16 16l0 176c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-176c0-8.8-7.2-16-16-16l-83.4 0c-6.9 0-12.6-5.6-12.6-12.6c0-3.2 1.2-6.3 3.5-8.7L178.1 69c3-3.2 7.2-5 11.6-5zM384 227.4c0-11.4-4.4-22.5-12.3-30.7L229 46.9C220 37.4 207.4 32 194.3 32l-4.6 0C176.6 32 164 37.4 155 46.9L12.3 196.7C4.4 205 0 216 0 227.4C0 252 20 272 44.6 272l67.4 0 0 160c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-160 67.4 0c24.6 0 44.6-20 44.6-44.6z" />
    </Icon>
);

export default Up;