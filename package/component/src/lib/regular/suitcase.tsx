
import { Icon } from "../../index";

/**
 * A component that renders the `suitcase` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase?s=regular suitcase}
 * @preview ![suitcase](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/suitcase.svg)
 */
const Suitcase: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 56l0 40 160 0 0-40c0-4.4-3.6-8-8-8L184 48c-4.4 0-8 3.6-8 8zM128 96l0-40c0-30.9 25.1-56 56-56L328 0c30.9 0 56 25.1 56 56l0 40 64 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l64 0zm232 48l-208 0-8 0 0 288 224 0 0-288-8 0zM64 144c-8.8 0-16 7.2-16 16l0 256c0 8.8 7.2 16 16 16l32 0 0-288-32 0zM448 432c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16l-32 0 0 288 32 0z" />
    </Icon>
);

export default Suitcase;