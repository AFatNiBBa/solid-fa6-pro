
import { Icon } from "../../index";

/**
 * A component that renders the `person-circle-minus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-minus?s=sharp-light person-circle-minus}
 * @preview ![person-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/person-circle-minus.svg)
 */
const PersonCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 80a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-80a56 56 0 1 1 0 112A56 56 0 1 1 160 0zM99.3 128l9.6 0 102.2 0 9.6 0 4.5 8.5 66.7 124.9c-7.5 9.8-14 20.5-19.3 31.8l-48.6-91L224 496l0 16-32 0 0-16 0-144-64 0 0 144 0 16-32 0 0-16 0-293.9L46.1 295.5l-7.5 14.1L10.3 294.6l7.5-14.1 76.9-144 4.5-8.5zM128 320l64 0 0-160-64 0 0 160zM432 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm80 160l-16 0-128 0-16 0 0-32 16 0 128 0 16 0 0 32z" />
    </Icon>
);

export default PersonCircleMinus;