
import { Icon } from "../../index";

/**
 * A component that renders the `escalator` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/escalator?s=regular escalator}
 * @preview ![escalator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/escalator.svg)
 */
const Escalator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm182.1 85.8c16-14 36.6-21.8 57.9-21.8l104 0c48.6 0 88 39.4 88 88s-39.4 88-88 88l-70.9 0L249.9 490.2c-16 14-36.6 21.8-57.9 21.8L88 512c-48.6 0-88-39.4-88-88s39.4-88 88-88l70.9 0L390.1 133.8zM448 160c-9.7 0-19 3.5-26.3 9.9L183.8 378.1c-4.4 3.8-10 5.9-15.8 5.9l-80 0c-22.1 0-40 17.9-40 40s17.9 40 40 40l104 0c9.7 0 19-3.5 26.3-9.9L456.2 245.9c4.4-3.8 10-5.9 15.8-5.9l80 0c22.1 0 40-17.9 40-40s-17.9-40-40-40l-104 0zM256 128c23.7 0 44.4 12.9 55.5 32L192 264.5l0-72.5c0-35.3 28.7-64 64-64z" />
    </Icon>
);

export default Escalator;