
import { Icon } from "../../index";

/**
 * A component that renders the `passport` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/passport?s=regular passport}
 * @preview ![passport](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/passport.svg)
 */
const Passport: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 48c8.8 0 16 7.2 16 16l0 384c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l320 0zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM96 400c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-224 0c-8.8 0-16 7.2-16 16zm33.3-176l39.1 0c1.6 30.4 7.7 53.8 14.6 70.8c-27.9-13.2-48.4-39.4-53.7-70.8zM224 304l-.3 0c-2.4-3.5-5.7-8.9-9.1-16.5c-6-13.6-12.4-34.3-14.2-63.5l47.1 0c-1.8 29.2-8.1 49.9-14.2 63.5c-3.4 7.6-6.7 13-9.1 16.5l-.3 0zm94.7-80c-5.3 31.4-25.8 57.6-53.7 70.8c6.8-17.1 12.9-40.4 14.6-70.8l39.1 0zm0-32l-39.1 0c-1.6-30.4-7.7-53.8-14.6-70.8c27.9 13.2 48.4 39.4 53.7 70.8zM224 112l.3 0c2.4 3.5 5.7 8.9 9.1 16.5c6 13.6 12.4 34.3 14.2 63.5l-47.1 0c1.8-29.2 8.1-49.9 14.2-63.5c3.4-7.6 6.7-13 9.1-16.5l.3 0zm-94.7 80c5.3-31.4 25.8-57.6 53.7-70.8c-6.8 17.1-12.9 40.4-14.6 70.8l-39.1 0zM224 336a128 128 0 1 0 0-256 128 128 0 1 0 0 256z" />
    </Icon>
);

export default Passport;