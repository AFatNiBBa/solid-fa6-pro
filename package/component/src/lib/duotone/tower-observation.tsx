
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tower-observation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tower-observation?s=duotone tower-observation}
 * @preview ![tower-observation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tower-observation.svg)
 */
const TowerObservation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M100.9 448l32-192 64.9 0c-1.6 9.4-3.1 18.9-4.7 28.3L256 336.8l62.9-52.5L314.2 256l64.9 0 32 192-96.6 0L256 399.2 197.5 448l-96.6 0zm71.9-41.9L218.5 368l-34.6-28.8-11.2 67zM293.5 368l45.8 38.1-11.2-67L293.5 368z" />
        <path d="M270.3 3.4c-9-4.5-19.6-4.5-28.6 0l-160 80c-15.8 7.9-22.2 27.1-14.3 42.9C73 137.5 84.3 144 96 144l0 80c0 17.7 14.3 32 32 32l4.9 0 64.9 0 116.5 0 64.9 0 4.9 0c17.7 0 32-14.3 32-32l0-80c11.7 0 23-6.5 28.6-17.7c7.9-15.8 1.5-35-14.3-42.9l-160-80zM480 448l-68.9 0-96.6 0-117 0-96.6 0L32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l95.5 0c.4 0 .8 0 1.1 0l254.8 0c.4 0 .8 0 1.1 0l95.5 0c17.7 0 32-14.3 32-32s-14.3-32-32-32zM160 144c0-8.8 7.2-16 16-16l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default TowerObservation;