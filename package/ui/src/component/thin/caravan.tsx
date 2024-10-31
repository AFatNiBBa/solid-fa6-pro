
import { Icon } from "../../index";

/**
 * A component that renders the `caravan` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caravan?s=thin caravan}
 * @preview ![caravan](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/caravan.svg)
 */
const Caravan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 48c79.5 0 144 64.5 144 144l0 208-272 0-1.3 0s0 0 0 0c-7.6-45.4-47.1-80-94.7-80s-87.1 34.6-94.7 80L80 400c-35.3 0-64-28.7-64-64l0-224c0-35.3 28.7-64 64-64l336 0zM80 416l16 0c0 53 43 96 96 96s96-43 96-96l272 0 16 0 56 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-56 0 0-208c0-88.4-71.6-160-160-160L80 32C35.8 32 0 67.8 0 112L0 336c0 44.2 35.8 80 80 80zM96 144l128 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16L96 240c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zM64 160l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 128c-17.7 0-32 14.3-32 32zm352-16c8.8 0 16 7.2 16 16l0 64-40 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l40 0 0 80c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-160c0-8.8 7.2-16 16-16l64 0zm32 88l0-72c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 160c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-88zM192 336a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default Caravan;