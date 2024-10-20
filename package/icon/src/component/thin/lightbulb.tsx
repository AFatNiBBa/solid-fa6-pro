
import { Icon } from "../../index";

/**
 * A component that renders the `lightbulb` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb?s=thin lightbulb}
 * @preview ![lightbulb](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/lightbulb.svg)
 */
const Lightbulb: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M323.5 267.2c18-25.9 28.5-57.3 28.5-91.2c0-88.4-71.6-160-160-160S32 87.6 32 176c0 33.9 10.5 65.3 28.5 91.2c4.5 6.5 9.5 13.3 14.5 20.2c0 0 0 0 0 0s0 0 0 0c12.5 17.2 25.9 35.5 36.3 54.4c7.4 13.5 11.6 27.8 14 42.2L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-16.2 0c2.4-14.4 6.6-28.7 14-42.2c10.4-19 23.7-37.3 36.3-54.4c5-6.9 10-13.7 14.5-20.2zM184 80c-48.6 0-88 39.4-88 88c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-57.4 46.6-104 104-104c4.4 0 8 3.6 8 8s-3.6 8-8 8zM128 432c0 35.3 28.7 64 64 64s64-28.7 64-64l-128 0zm-16 0l0-5.3c0-5.9 4.8-10.7 10.7-10.7l138.7 0c5.9 0 10.7 4.8 10.7 10.7l0 5.3c0 44.2-35.8 80-80 80s-80-35.8-80-80z" />
    </Icon>
);

export default Lightbulb;