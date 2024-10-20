
import { Icon } from "../../index";

/**
 * A component that renders the `acorn` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/acorn?s=regular acorn}
 * @preview ![acorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/acorn.svg)
 */
const Acorn: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M267.2 38.4c8-10.6 5.8-25.6-4.8-33.6s-25.6-5.8-33.6 4.8L224 16c-10.7 14.3-18 30.7-21.6 48L96 64C43 64 0 107 0 160l0 16c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-16c0-53-43-96-96-96l-99.9 0c2.4-6.8 5.9-13.3 10.3-19.2l4.8-6.4zM400 160L48 160c0-26.5 21.5-48 48-48l256 0c26.5 0 48 21.5 48 48zM48.4 240c4.1 78.1 39 189.3 165.5 236.4c6.5 2.4 13.7 2.4 20.2 0C360.6 429.3 395.5 318.1 399.6 240l-48.1 0c-3.9 65.7-32.7 150.2-127.5 188.9C129.2 390.2 100.3 305.7 96.5 240l-48.1 0z" />
    </Icon>
);

export default Acorn;