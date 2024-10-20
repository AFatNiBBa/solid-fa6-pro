
import { Icon } from "../../index";

/**
 * A component that renders the `tower-control` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tower-control?s=light tower-control}
 * @preview ![tower-control](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/tower-control.svg)
 */
const TowerControl: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 16c0-8.8 7.2-16 16-16l48 0 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 48 0c17.7 0 32 14.3 32 32l0 32 80.9 0c26.2 0 45.3 24.8 38.7 50.1L402.6 320.2c7.6 1.2 13.4 7.8 13.4 15.8c0 8.8-7.2 16-16 16l-48 0 0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-144-192 0 0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-144-48 0c-8.8 0-16-7.2-16-16c0-8 5.8-14.6 13.4-15.8L8.4 178.1C1.8 152.8 20.9 128 47.1 128l80.9 0 0-32c0-17.7 14.3-32 32-32l48 0 0-32-32 0c-8.8 0-16-7.2-16-16zM128 160.2l0-.2-80.9 0c-5.2 0-9.1 5-7.7 10L78.5 320l49.6 0 0-159.8zM160 320l128 0 0-159.8 0-.2-128 0 0 160zM320 160l0 160 49.6 0 39.1-150c1.3-5.1-2.5-10-7.7-10L320 160zm-32-32l0-32L160 96l0 32 128 0z" />
    </Icon>
);

export default TowerControl;