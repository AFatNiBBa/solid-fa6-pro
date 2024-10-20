
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grin-hearts` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-hearts?s=sharp-duotone-solid face-grin-hearts}
 * @preview ![face-grin-hearts](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-grin-hearts.svg)
 */
const FaceGrinHearts: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96 46.8c46.2 18.3 101.2 29 160.2 29s114.1-10.6 160.2-29C400.3 376.7 334.7 432 256.3 432s-144-55.3-160.2-129.2zm1.1-114.8c4.8-17.8 23.1-28.4 40.8-23.6l16.1 4.3 4.3-16.1c4.8-17.8 23.1-28.4 40.8-23.6s28.4 23.1 23.6 40.8l-21.6 80.5-80.6-21.6c-17.8-4.8-28.4-23.1-23.6-40.8zm192-18.1c-4.8-17.8 5.8-36.1 23.6-40.8s36.1 5.8 40.9 23.6l4.3 16.1 16.1-4.3c17.8-4.8 36.1 5.8 40.8 23.6c.8 2.9 1.1 5.8 1.1 8.7c0 14.7-9.8 28.2-24.7 32.2l-80.6 21.6L289.1 170z" />
        <path d="M158.4 152.7c4.8-17.8 23.1-28.4 40.8-23.6s28.4 23.1 23.6 40.8l-21.6 80.5-80.6-21.6c-17.8-4.8-28.4-23.1-23.6-40.8s23.1-28.4 40.8-23.6l16.1 4.3 4.3-16.1zm195.2 0l4.3 16.1 16.1-4.3c17.8-4.8 36.1 5.8 40.8 23.6s-5.8 36.1-23.6 40.8l-80.6 21.6L289.1 170c-4.8-17.8 5.8-36.1 23.6-40.8s36.1 5.8 40.9 23.6z" />
    </Icon>
);

export default FaceGrinHearts;