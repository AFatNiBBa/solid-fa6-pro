
import { Icon } from "../../index";

/**
 * A component that renders the `wrench-simple` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wrench-simple?s=regular wrench-simple}
 * @preview ![wrench-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/wrench-simple.svg)
 */
const WrenchSimple: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M133 10.3c6.9 4.4 11 12 11 20.2l0 119.6 48 48 48-48 0-119.6c0-8.2 4.2-15.8 11-20.2s15.5-5 23-1.6C338.3 38.2 384 98.5 384 176c0 64.3-31.6 121.1-80 156l0 156c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-168.9c0-8.3 4.3-16.1 11.4-20.4C308.6 273.3 336 227.8 336 176c0-42.2-18.3-77.7-48-102.4l0 86.4c0 6.4-2.5 12.5-7 17l-72 72c-4.5 4.5-10.6 7-17 7s-12.5-2.5-17-7l-72-72c-4.5-4.5-7-10.6-7-17l0-86.4C66.3 98.3 48 133.8 48 176c0 51.8 27.4 97.3 68.6 122.7c7.1 4.4 11.4 12.1 11.4 20.4L128 488c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-156C31.6 297.1 0 240.3 0 176C0 98.5 45.7 38.2 110 8.7c7.4-3.4 16.1-2.8 23 1.6z" />
    </Icon>
);

export default WrenchSimple;