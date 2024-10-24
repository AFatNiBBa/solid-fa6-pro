
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ballot-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ballot-check?s=sharp-duotone-solid ballot-check}
 * @preview ![ballot-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ballot-check.svg)
 */
const BallotCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 512l448 0L448 0 0 0zM49.4 248L72 225.4l11.3 11.3L96 249.4l36.7-36.7L144 201.4 166.6 224l-11.3 11.3-48 48L96 294.6 84.7 283.3l-24-24L49.4 248zM64 96l64 0 0 64-64 0 0-64zm0 256l64 0 0 64-64 0 0-64zM192 112l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32zm0 128l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32zm0 128l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32z" />
        <path d="M64 96l0 64 64 0 0-64L64 96zm0 320l64 0 0-64-64 0 0 64zm91.3-180.7L166.6 224 144 201.4l-11.3 11.3L96 249.4 83.3 236.7 72 225.4 49.4 248l11.3 11.3 24 24L96 294.6l11.3-11.3 48-48z" />
    </Icon>
);

export default BallotCheck;