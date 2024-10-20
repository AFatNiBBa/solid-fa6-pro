
import { Icon } from "../../index";

/**
 * A component that renders the `grapes` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grapes?s=solid grapes}
 * @preview ![grapes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/grapes.svg)
 */
const Grapes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M346.7 6C337.6 17 320 42.3 320 72c0 40 15.3 55.3 40 80s40 40 80 40c29.7 0 55-17.6 66-26.7c4-3.3 6-8.2 6-13.3s-2-10-6-13.2c-11.4-9.1-38.3-26.8-74-26.8c-32 0-40 8-40 8s8-8 8-40c0-35.7-17.7-62.6-26.8-74C370 2 365.1 0 360 0s-10 2-13.3 6zM304 152a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zM112 232a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm32 80A56 56 0 1 0 32 312a56 56 0 1 0 112 0zM112 456A56 56 0 1 0 0 456a56 56 0 1 0 112 0zm144-32a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm80 32a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM280 288a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm80 32a56 56 0 1 0 0-112 56 56 0 1 0 0 112z" />
    </Icon>
);

export default Grapes;