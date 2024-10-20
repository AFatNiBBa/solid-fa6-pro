
import { Icon, generic } from "../../index";

/**
 * A component that renders the `engine` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/engine?s=duotone engine}
 * @preview ![engine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/engine.svg)
 */
const Engine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160L0 352c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72 48 0 0-48-48 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24zM184 88c0 13.3 10.7 24 24 24l72 0 0 32 48 0 0-32 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L208 64c-13.3 0-24 10.7-24 24zM544 224l0 192c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32z" />
        <path d="M96 176c0-17.7 14.3-32 32-32l32 0 48 0 201.5 0c14.5 0 28.6 4.9 40 14L488 188.8c15.2 12.1 24 30.5 24 50L512 384c0 35.3-28.7 64-64 64l-193.2 0c-19.4 0-37.8-8.8-50-24l-32-40L128 384c-17.7 0-32-14.3-32-32l0-176zM288 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-64-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Engine;