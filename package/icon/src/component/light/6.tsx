
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `6` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/6?s=light 6}
 * @preview ![6](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDMyMEMwIDQwOC4yMTkgNzEuNzgxIDQ4MCAxNjAgNDgwUzMyMCA0MDguMjE5IDMyMCAzMjBTMjQ4LjIxOSAxNjAgMTYwIDE2MEMxNDcuNDU3IDE2MCAxMzUuMzkxIDE2MS43OTcgMTIzLjY3MiAxNjQuNTM5TDIxOS44NDQgNTguNzVDMjI1Ljc4MSA1Mi4yMTkgMjI1LjMxMiA0Mi4wOTQgMjE4Ljc1IDM2LjE1NkMyMTUuNjg4IDMzLjM3NSAyMTEuODQ0IDMyIDIwOCAzMkMyMDMuNjU2IDMyIDE5OS4zMTIgMzMuNzUgMTk2LjE1NiAzNy4yNUM1MS43MDQgMTk2LjE0OCAwIDIzOC42MjEgMCAzMjBaTTI4OCAzMjBDMjg4IDM5MC41OTQgMjMwLjU5NCA0NDggMTYwIDQ0OFMzMiAzOTAuNTk0IDMyIDMyMFM4OS40MDYgMTkyIDE2MCAxOTJTMjg4IDI0OS40MDYgMjg4IDMyMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function $6(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M0 320C0 408.219 71.781 480 160 480S320 408.219 320 320S248.219 160 160 160C147.457 160 135.391 161.797 123.672 164.539L219.844 58.75C225.781 52.219 225.312 42.094 218.75 36.156C215.688 33.375 211.844 32 208 32C203.656 32 199.312 33.75 196.156 37.25C51.704 196.148 0 238.621 0 320ZM288 320C288 390.594 230.594 448 160 448S32 390.594 32 320S89.406 192 160 192S288 249.406 288 320Z" />
        </Icon>
    </>
}