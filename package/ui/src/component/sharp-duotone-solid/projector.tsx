
import { Icon, generic } from "../../index";

/**
 * A component that renders the `projector` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/projector?s=sharp-duotone-solid projector}
 * @preview ![projector](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/projector.svg)
 */
const Projector: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 448l64 0 16 64 64 0 16-64 160 0c-38.9-29.2-64-75.7-64-128c0-1.6 0-3.3 .1-4.9s.1-3.2 .2-4.9c.2-3.2 .5-6.4 .9-9.6c.8-6.3 1.9-12.6 3.4-18.6c3-12.2 7.3-23.8 12.9-34.7c.7-1.4 1.4-2.7 2.1-4.1c.7-1.4 1.5-2.7 2.3-4c1.5-2.6 3.2-5.2 4.8-7.7c3.4-5.1 7-9.9 10.9-14.6c7.8-9.3 16.7-17.7 26.4-25L0 192zM128 320a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm6.1-264l17 17 56 56 17 17L353.9 112 337 95 281 39l-17-17L230.1 56zM392 0l0 24 0 80 0 24 48 0 0-24 0-80 0-24L392 0zm86.1 112L512 145.9l17-17 56-56 17-17L568 22.1 551 39 495 95l-17 17zm6.1 352.8L496 512l64 0 16-64 64 0 0-256-128 0c38.9 29.2 64 75.7 64 128c0 2 0 4-.1 6s-.2 4-.3 5.9c-.3 3.9-.7 7.8-1.3 11.7c-1.1 7.7-2.8 15.2-5 22.5c-4.4 14.6-10.8 28.3-18.8 40.8c-16.2 25-39.1 45.2-66.2 58z" />
        <path d="M512 320a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm-256 0a160 160 0 1 1 320 0 160 160 0 1 1 -320 0zM96 288a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Projector;