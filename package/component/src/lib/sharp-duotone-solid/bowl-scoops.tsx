
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowl-scoops` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-scoops?s=sharp-duotone-solid bowl-scoops}
 * @preview ![bowl-scoops](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bowl-scoops.svg)
 */
const BowlScoops: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 208c0 17.2 3.9 33.5 10.8 48l189.4 0c-5.3-15-8.2-31.2-8.2-48c0-22 4.9-42.8 13.7-61.4c-19.8-30.2-53.8-50.2-92.6-50.6L112 96C50.1 96 0 146.1 0 208zM122.6 64.4c40.9 3 77.1 23 101.4 53.1c24.3-30.1 60.5-50.1 101.4-53.1C307.5 26.3 268.8 0 224 0s-83.5 26.3-101.4 64.4zM224 208c0 17.2 3.9 33.5 10.8 48l202.4 0c6.9-14.5 10.8-30.8 10.8-48c0-61.9-50.1-112-112-112l-1.1 0c-38.7 .4-72.7 20.4-92.6 50.6C230.7 164.2 224 185.3 224 208z" />
        <path d="M448 256L0 256l4.5 44.7C11 366.2 66.1 416 131.8 416l60.2 0-80 72 0 24 224 0 0-24-80-72 60.2 0c65.8 0 120.8-49.8 127.4-115.3L448 256z" />
    </Icon>
);

export default BowlScoops;