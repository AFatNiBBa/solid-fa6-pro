
import { Icon } from "../../index";

/**
 * A component that renders the `cowbell` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell?s=thin cowbell}
 * @preview ![cowbell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/cowbell.svg)
 */
const Cowbell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M168 16l112 0c13.3 0 24 10.7 24 24l0 56L144 96l0-56c0-13.3 10.7-24 24-24zM128 40l0 56-16 0c-21.4 0-40.3 14.2-46.2 34.8l-64 224c-4.1 14.5-1.2 30.1 7.8 42.1S32.9 416 48 416l352 0c15.1 0 29.3-7.1 38.3-19.1s12-27.6 7.8-42.1l-64-224C376.3 110.2 357.4 96 336 96l-16 0 0-56c0-22.1-17.9-40-40-40L168 0c-22.1 0-40 17.9-40 40zm8 72l176 0 24 0c14.3 0 26.8 9.5 30.8 23.2l64 224c2.8 9.7 .8 20-5.2 28.1s-15.5 12.7-25.5 12.7L48 400c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1l64-224C85.2 121.5 97.7 112 112 112l24 0zm40 336c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 12.7-5.1 24.9-14.1 33.9s-21.2 14.1-33.9 14.1s-24.9-5.1-33.9-14.1s-14.1-21.2-14.1-33.9z" />
    </Icon>
);

export default Cowbell;