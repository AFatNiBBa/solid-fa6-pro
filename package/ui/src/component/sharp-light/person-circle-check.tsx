
import { Icon } from "../../index";

/**
 * A component that renders the `person-circle-check` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-check?s=sharp-light person-circle-check}
 * @preview ![person-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/person-circle-check.svg)
 */
const PersonCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 80a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-80a56 56 0 1 1 0 112A56 56 0 1 1 160 0zM99.3 128l9.6 0 102.2 0 9.6 0 4.5 8.5 66.7 124.9c-7.5 9.8-14 20.5-19.3 31.8l-48.6-91L224 496l0 16-32 0 0-16 0-144-64 0 0 144 0 16-32 0 0-16 0-293.9L46.1 295.5l-7.5 14.1L10.3 294.6l7.5-14.1 76.9-144 4.5-8.5zM128 320l64 0 0-160-64 0 0 160zM432 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm78.6 112l-11.3 11.3-72 72L416 430.6l-11.3-11.3-40-40L353.4 368 376 345.4l11.3 11.3L416 385.4l60.7-60.7L488 313.4 510.6 336z" />
    </Icon>
);

export default PersonCircleCheck;