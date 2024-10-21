
import { Icon } from "../../index";

/**
 * A component that renders the `binoculars` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binoculars?s=light binoculars}
 * @preview ![binoculars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/binoculars.svg)
 */
const Binoculars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 32c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0zm224 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0zM192 432c0 8.8-7.2 16-16 16L48 448c-8.8 0-16-7.2-16-16l0-75.1c0-28.8 7.8-57.1 22.7-81.9c16-26.6 26.2-56.3 30.1-87.1L90.5 142c1-8 7.8-14 15.9-14l85.6 0 0 16 0 128 0 160zm32 0l0-144 64 0 0 144c0 26.5 21.5 48 48 48l128 0c26.5 0 48-21.5 48-48l0-75.1c0-34.6-9.4-68.6-27.2-98.3c-13.7-22.8-22.5-48.2-25.8-74.6L453.3 138c-3-24-23.4-42-47.6-42L312 96c-13.3 0-24 10.7-24 24l0 8-64 0 0-8c0-13.3-10.7-24-24-24l-93.6 0c-24.2 0-44.6 18-47.6 42L53 184c-3.3 26.4-12.1 51.8-25.8 74.6C9.4 288.3 0 322.3 0 356.9L0 432c0 26.5 21.5 48 48 48l128 0c26.5 0 48-21.5 48-48zm0-176l0-96 64 0 0 96-64 0zm96 16l0-128 0-16 85.6 0c8.1 0 14.9 6 15.9 14l5.7 45.9c3.9 30.8 14.1 60.5 30.1 87.1c14.8 24.7 22.7 53 22.7 81.9l0 75.1c0 8.8-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16l0-160z" />
    </Icon>
);

export default Binoculars;