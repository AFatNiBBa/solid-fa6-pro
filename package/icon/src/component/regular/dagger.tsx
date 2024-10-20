
import { Icon } from "../../index";

/**
 * A component that renders the `dagger` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dagger?s=regular dagger}
 * @preview ![dagger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/dagger.svg)
 */
const Dagger: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0c13.3 0 24 10.7 24 24l0 104 32 0 24 0 64 0c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48l-16 0-48 0-32 0-32 0-48 0-16 0c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48l64 0 24 0 32 0 0-104c0-13.3 10.7-24 24-24zm32 397.9L224 208l48 0 0 189.9c0 11.5-3.5 22.7-10.1 32.1l-50.2 71.7c-4.5 6.4-11.8 10.2-19.7 10.2s-15.2-3.8-19.7-10.2L122.1 430c-6.6-9.4-10.1-20.6-10.1-32.1L112 208l48 0 0 189.9c0 1.6 .5 3.2 1.4 4.6L192 446.2l30.6-43.7c.9-1.3 1.4-2.9 1.4-4.6z" />
    </Icon>
);

export default Dagger;