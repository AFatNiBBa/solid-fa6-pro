
import { Icon } from "../../index";

/**
 * A component that renders the `dagger` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dagger?s=thin dagger}
 * @preview ![dagger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/dagger.svg)
 */
const Dagger: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M200 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 120L72 128l-32 0c-22.1 0-40 17.9-40 40s17.9 40 40 40s40-17.9 40-40l0-24 112 0 112 0 0 24c0 22.1 17.9 40 40 40s40-17.9 40-40s-17.9-40-40-40l-32 0-112 0L200 8zM40 144l24 0 0 24c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24zm280 0l24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24l0-24zM144 176l-16 0 0 8 0 229.9c0 8.2 2.5 16.2 7.2 22.9l50.2 71.7c1.5 2.1 3.9 3.4 6.6 3.4s5.1-1.3 6.6-3.4l50.2-71.7c4.7-6.7 7.2-14.7 7.2-22.9L256 184l0-8-16 0 0 8 0 229.9c0 4.9-1.5 9.7-4.3 13.8L192 490.1l-43.7-62.4c-2.8-4-4.3-8.8-4.3-13.8L144 184l0-8z" />
    </Icon>
);

export default Dagger;