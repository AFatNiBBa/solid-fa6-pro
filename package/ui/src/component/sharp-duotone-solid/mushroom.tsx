
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mushroom` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mushroom?s=sharp-duotone-solid mushroom}
 * @preview ![mushroom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mushroom.svg)
 */
const Mushroom: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 224a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM144 96c0 44.2 35.8 80 80 80s80-35.8 80-80c0-25.8-12.2-48.8-31.2-63.4c-.2-.1-.3-.2-.5-.4c-3.5-.2-6.9-.2-10.4-.2l-11.8 0c-33.1 0-64.5 7.1-92.9 19.9c-.7 1-1.3 2-1.9 3C148.1 66.9 144 81 144 96zm16 384l192 0L312 320l-112 0L160 480zM368 176c0 35.3 28.7 64 64 64c20.7 0 39.1-9.8 50.8-25.1c.3-.4 .6-.8 .9-1.1c-7.6-38.3-24.9-73.1-49.2-101.7c-.8 0-1.7 0-2.5 0c-.2 0-.5 0-.7 0c-35 .4-63.3 28.9-63.3 64z" />
        <path d="M224 176c44.2 0 80-35.8 80-80c0-25.8-12.2-48.8-31.2-63.4C336 37.1 392.2 66.9 431.3 112c-35 .4-63.3 28.9-63.3 64c0 35.3 28.7 64 64 64c20.7 0 39.1-9.8 50.8-25.1c3.4 15.8 5.2 32.2 5.2 49.1l0 32 0 24-24 0L48 320l-24 0 0-24 0-32C24 171.9 77.6 92.4 155.3 54.9C148.1 66.9 144 81 144 96c0 44.2 35.8 80 80 80zm-96 80a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Mushroom;