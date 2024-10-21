
import { Icon } from "../../index";

/**
 * A component that renders the `person-running` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-running?s=sharp-light person-running}
 * @preview ![person-running](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/person-running.svg)
 */
const PersonRunning: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M280 80a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-80a56 56 0 1 1 0 112A56 56 0 1 1 280 0zM121.4 112l6.6 0 48 0 2.2 0 2.2 .6 112 32 8.5 2.4 2.4 8.5L332.1 256l67.9 0 16 0 0 32-16 0-80 0-12.1 0-3.3-11.6-20.3-70.9L247.2 317.1c-.2 .5-.3 .9-.5 1.3l49.2 27.7 11.7 6.6-4.5 12.7L251.3 512l-33.9 0 51.1-144.6-93.3-52.5c-20-11.3-29.3-35.2-22-57l36.4-109.3L173.8 144l-39.1 0L75.3 203.3 64 214.6 41.4 192l11.3-11.3 64-64 4.7-4.7zm99 45.3L183.5 268c-2.4 7.3 .7 15.2 7.3 19l27.5 15.4 44.3-133-42.2-12.1zM130 314.1c5.9 10 14.1 18.7 24.1 25.4l-27.4 66.6-4.1 9.9L112 416l-96 0L0 416l0-32 16 0 85.3 0L130 314.1z" />
    </Icon>
);

export default PersonRunning;