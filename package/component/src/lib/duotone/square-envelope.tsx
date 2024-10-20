
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-envelope` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-envelope?s=duotone square-envelope}
 * @preview ![square-envelope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-envelope.svg)
 */
const SquareEnvelope: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm64.2 76.4C66 156.4 79.5 144 96 144l256 0c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8L64.2 172.4zm-.2 38c45.5 29.4 91.1 58.8 136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9c45.5-29.4 91.1-58.8 136.6-88.2L384 336c0 17.7-14.3 32-32 32L96 368c-17.7 0-32-14.3-32-32l0-125.6z" />
        <path d="M64.2 172.4L218 271.7c1.8 1.2 3.9 1.8 6 1.8s4.2-.6 6-1.8l153.8-99.3C382 156.4 368.5 144 352 144L96 144c-16.5 0-30 12.4-31.8 28.4zm319.8 38L247.4 298.6c-7 4.5-15.1 6.9-23.4 6.9s-16.4-2.4-23.4-6.9L64 210.4 64 336c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-125.6z" />
    </Icon>
);

export default SquareEnvelope;