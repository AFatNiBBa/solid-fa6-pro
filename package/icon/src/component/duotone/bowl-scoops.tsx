
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowl-scoops` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-scoops?s=duotone bowl-scoops}
 * @preview ![bowl-scoops](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bowl-scoops.svg)
 */
const BowlScoops: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 208c0 17.2 3.9 33.5 10.8 48l5.2 0 184.2 0c-5.3-15-8.2-31.2-8.2-48c0-22 4.9-42.8 13.7-61.4c-19.8-30.2-53.8-50.2-92.6-50.6L112 96C50.1 96 0 146.1 0 208zM122.6 64.4c40.9 3 77.1 23 101.4 53.1c24.3-30.1 60.5-50.1 101.4-53.1C307.5 26.3 268.8 0 224 0s-83.5 26.3-101.4 64.4zM224 208c0 17.2 3.9 33.5 10.8 48L432 256l5.2 0c6.9-14.5 10.8-30.8 10.8-48c0-61.9-50.1-112-112-112l-1.1 0c-38.7 .4-72.7 20.4-92.6 50.6C230.7 164.2 224 185.3 224 208z" />
        <path d="M4 261.4c3-3.4 7.4-5.4 12-5.4l416 0c4.6 0 9 2 12 5.4s4.5 8 3.9 12.6l-2 15.9C436.9 361.9 375.6 416 303 416l-40.4 0 68.7 68.7c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9l-192 0c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4L185.4 416 145 416C72.4 416 11.1 361.9 2.1 289.9L.1 274c-.6-4.6 .8-9.1 3.9-12.6z" />
    </Icon>
);

export default BowlScoops;