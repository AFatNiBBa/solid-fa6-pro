
import { Icon } from "../../index";

/**
 * A component that renders the `oven` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oven?s=thin oven}
 * @preview ![oven](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/oven.svg)
 */
const Oven: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 16C51.8 16 16 51.8 16 96l0 64 416 0 0-64c0-44.2-35.8-80-80-80L96 16zM0 168L0 96C0 43 43 0 96 0L352 0c53 0 96 43 96 96l0 72 0 280c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 168zm432 8L16 176l0 272c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-272zM80 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM272 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM96 240c-8.8 0-16 7.2-16 16l0 160c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-160c0-8.8-7.2-16-16-16L96 240zM64 256c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-160zm64 40c0-4.4 3.6-8 8-8l176 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-176 0c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default Oven;