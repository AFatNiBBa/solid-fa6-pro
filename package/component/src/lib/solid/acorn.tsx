
import { Icon } from "../../index";

/**
 * A component that renders the `acorn` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/acorn?s=solid acorn}
 * @preview ![acorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/acorn.svg)
 */
const Acorn: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M262.4 4.8c10.6 8 12.8 23 4.8 33.6l-4.8 6.4c-4.4 5.9-7.9 12.4-10.3 19.2L352 64c53 0 96 43 96 96c0 17.7-14.3 32-32 32L32 192c-17.7 0-32-14.3-32-32c0-53 43-96 96-96l106.4 0C206 46.7 213.3 30.3 224 16l4.8-6.4c8-10.6 23-12.8 33.6-4.8zM213.9 476.4C78.5 425.9 48 302.1 48 224l176 0 176 0c0 78.1-30.5 201.9-165.9 252.4c-6.5 2.4-13.7 2.4-20.2 0z" />
    </Icon>
);

export default Acorn;