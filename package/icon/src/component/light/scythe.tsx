
import { Icon } from "../../index";

/**
 * A component that renders the `scythe` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scythe?s=light scythe}
 * @preview ![scythe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/scythe.svg)
 */
const Scythe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M639.7 19.1c1.7-8.7-3.9-17.1-12.6-18.8s-17.1 3.9-18.8 12.6L550.1 304 400 304c-8.8 0-16 7.2-16 16s7.2 16 16 16l143.7 0L512.3 492.9c-1.7 8.7 3.9 17.1 12.6 18.8s17.1-3.9 18.8-12.6l96-480zM352 0C121.4 0 20.6 155.8 2.9 186.7c-2 3.5-2.9 7.4-2.9 11.4C0 212.4 11.6 224 25.9 224l507.6 0 6.4-32L37.2 192C64.7 149.7 158.7 32 352 32l219.8 0 5.1-25.4c.5-2.3 1.1-4.5 1.8-6.6L352 0z" />
    </Icon>
);

export default Scythe;