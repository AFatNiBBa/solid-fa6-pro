
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilet-paper` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet-paper?s=duotone toilet-paper}
 * @preview ![toilet-paper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/toilet-paper.svg)
 */
const ToiletPaper: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M20.2 495.8c-5.7-10-5.6-22.3 .4-32.2C63.6 385.7 64 277.3 64 192C64 86 107 0 160 0L512 0c-53 0-96 86-96 192c0 81.9-7.3 145-16.4 192c-8.6 44.1-18.8 74-26.3 91.9c-10 24-33.2 36.1-55.4 36.1L48 512c-11.5 0-22.2-6.2-27.8-16.2zM128 208a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm64 0a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm64 0a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm64 0a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
        <path d="M512 384l-112.4 0c9.1-47 16.4-110.1 16.4-192C416 86 459 0 512 0s96 86 96 192s-43 192-96 192zm0-128c17.7 0 32-28.7 32-64s-14.3-64-32-64s-32 28.7-32 64s14.3 64 32 64zM128 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm64 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm48 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default ToiletPaper;