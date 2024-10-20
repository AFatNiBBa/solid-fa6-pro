
import { Icon } from "../../index";

/**
 * A component that renders the `dagger` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dagger?s=light dagger}
 * @preview ![dagger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/dagger.svg)
 */
const Dagger: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M208 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 112-32 0-32 0-32 0-32 0c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48l0-16 16 0 32 0 48 0 48 0 32 0 16 0 0 16c0 26.5 21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48l-32 0-32 0-32 0-32 0 0-112zM48 160l16 0 0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm272 0l16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16l0-16zM240 397.9c0 4.9-1.5 9.7-4.3 13.8L192 474.1l-43.7-62.4c-2.8-4-4.3-8.8-4.3-13.8L144 192l-32 0 0 205.9c0 11.5 3.5 22.7 10.1 32.1l50.2 71.7c4.5 6.4 11.8 10.2 19.7 10.2s15.2-3.8 19.7-10.2L261.9 430c6.6-9.4 10.1-20.6 10.1-32.1L272 192l-32 0 0 205.9z" />
    </Icon>
);

export default Dagger;