
import { Icon } from "../../index";

/**
 * A component that renders the `engine` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/engine?s=solid engine}
 * @preview ![engine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/engine.svg)
 */
const Engine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M400 112c13.3 0 24-10.7 24-24s-10.7-24-24-24L208 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 0 32-72 0-48 0-32 0c-17.7 0-32 14.3-32 32l0 56-48 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24L0 352c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72 48 0 0 72c0 17.7 14.3 32 32 32l44.8 0 32 40c12.1 15.2 30.5 24 50 24L448 448c35.3 0 64-28.7 64-64l0-145.2c0-19.4-8.8-37.8-24-50L449.5 158c-11.3-9.1-25.4-14-40-14L328 144l0-32 72 0zM544 224l0 192c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32zm-256 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM160 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Engine;