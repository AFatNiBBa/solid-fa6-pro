
import { Icon } from "../../index";

/**
 * A component that renders the `gas-pump` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gas-pump?s=thin gas-pump}
 * @preview ![gas-pump](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/gas-pump.svg)
 */
const GasPump: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16L96 16C69.5 16 48 37.5 48 64l0 352 256 0 0-352c0-26.5-21.5-48-48-48zM48 496l256 0 0-64L48 432l0 64zm296 16l-24 0-16 0L48 512l-16 0L8 512c-4.4 0-8-3.6-8-8s3.6-8 8-8l24 0L32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64l0 208 8 0c39.8 0 72 32.2 72 72l0 40c0 26.5 21.5 48 48 48s48-21.5 48-48l0-160-8 0c-30.9 0-56-25.1-56-56l0-95.1-29.4-27c-3.3-3-3.5-8-.5-11.3s8-3.5 11.3-.5l80.4 73.7c11.6 10.6 18.2 25.6 18.2 41.3L512 384c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-40c0-30.9-25.1-56-56-56l-8 0 0 208 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8zM496 149.1c0-11.2-4.7-21.9-13-29.5L448 87.5l0 80.5c0 22.1 17.9 40 40 40l8 0 0-58.9zM128 80c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16l-96 0zM96 96c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-96z" />
    </Icon>
);

export default GasPump;