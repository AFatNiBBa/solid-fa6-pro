
import { Icon } from "../../index";

/**
 * A component that renders the `crutch` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crutch?s=regular crutch}
 * @preview ![crutch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/crutch.svg)
 */
const Crutch: typeof Icon = x => (
    <Icon {...x}>
        <path d="M329 7L505 183c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L295 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0zM164.2 201.9L287.4 78.6l33.9 33.9L249.9 184 328 262.1l71.4-71.4 33.9 33.9L310.1 347.8c-11.8 11.8-26.8 20-43.1 23.7L159.4 395.4c-7.4 1.7-14.2 5.4-19.6 10.8L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l98.8-98.8c5.4-5.4 9.1-12.2 10.8-19.6L140.5 245c3.6-16.3 11.8-31.3 23.7-43.1zM216 217.9l-17.9 17.9c-5.4 5.4-9.1 12.2-10.8 19.6l-19.8 89 89-19.8c7.4-1.7 14.2-5.4 19.6-10.8L294.1 296 216 217.9z" />
    </Icon>
);

export default Crutch;