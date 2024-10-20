
import { Icon } from "../../index";

/**
 * A component that renders the `lightbulb` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb?s=sharp-light lightbulb}
 * @preview ![lightbulb](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/lightbulb.svg)
 */
const Lightbulb: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M310.3 258.1C326.5 234.8 336 206.6 336 176c0-79.5-64.5-144-144-144S48 96.5 48 176c0 30.6 9.5 58.8 25.7 82.1c4.1 5.9 8.8 12.3 13.6 19c0 0 0 0 0 0c12.7 17.5 27.1 37.2 38 57.1c8.9 16.2 13.7 33.3 16.2 49.9L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-32.4 0c2.5-16.6 7.3-33.7 16.2-49.9c10.9-20 25.3-39.7 38-57.1c4.9-6.7 9.5-13 13.6-19zM192 96c-44.2 0-80 35.8-80 80l-32 0c0-61.9 50.1-112 112-112l0 32zM144 448l0 32 96 0 0-32-96 0zm-32 0l0-32 32 0 96 0 32 0 0 32 0 32 0 32-32 0-96 0-32 0 0-32 0-32z" />
    </Icon>
);

export default Lightbulb;