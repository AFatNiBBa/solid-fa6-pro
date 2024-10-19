
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `down-from-line` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/down-from-line?s=light down-from-line}
 * @preview ![down-from-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTQuNDA2IDI3MkgyNTZWMTU2LjgyOEMyNTYgMTMyLjEwOSAyMzUuOTA2IDExMiAyMTEuMTg4IDExMkgxNzIuODEyQzE0OC4wOTQgMTEyIDEyOCAxMzIuMTA5IDEyOCAxNTYuODI4VjI3Mkg2OS41OTRDNTQuNTk0IDI3MiA0MS4wNjIgMjgwLjkwNiAzNS4wNjIgMjk0Ljc1QzI5LjEyNSAzMDguNTQ3IDMxLjkzOCAzMjQuNTMxIDQyLjEyNSAzMzUuMjk3TDE2NC42NTYgNDY4LjVDMTcxLjUzMSA0NzUuODEyIDE4MS41IDQ4MCAxOTIgNDgwUzIxMi40NjkgNDc1LjgxMiAyMTkuNSA0NjguMzQ0TDM0MS43MTkgMzM1LjQ1M0MzNTIuMDYyIDMyNC41MzEgMzU0Ljg3NSAzMDguNTQ3IDM0OC45MzcgMjk0LjY4OEMzNDIuOTM4IDI4MC45MDYgMzI5LjQwNiAyNzIgMzE0LjQwNiAyNzJaTTMxOC4zMTIgMzEzLjY0MUwxOTYuMDk0IDQ0Ni41MzFDMTk0LjM0NCA0NDguMzQ0IDE4OS41IDQ0OC4xODcgMTg4LjA2MiA0NDYuNjg3TDY1LjUzMSAzMTMuNDg0QzY0IDMxMS44NDQgNjMuNTYyIDMwOS40NTMgNjQuNDM4IDMwNy40MzhDNjUuMzQ0IDMwNS4zNDQgNjcuMzc1IDMwNCA2OS41OTQgMzA0SDE2MFYxNTYuODI4QzE2MCAxNDkuNzUgMTY1Ljc1IDE0NCAxNzIuODEyIDE0NEgyMTEuMTg4QzIxOC4yNSAxNDQgMjI0IDE0OS43NSAyMjQgMTU2LjgyOFYzMDRIMzE0LjQwNkMzMTYuNjI1IDMwNCAzMTguNjU2IDMwNS4zNDQgMzE5LjU2MiAzMDcuMzc1QzMyMC40MzggMzA5LjQ1MyAzMjAgMzExLjg0NCAzMTguMzEyIDMxMy42NDFaTTM2OCAzMkgxNkM3LjE1NiAzMiAwIDM5LjE1NiAwIDQ4UzcuMTU2IDY0IDE2IDY0SDM2OEMzNzYuODQ0IDY0IDM4NCA1Ni44NDQgMzg0IDQ4UzM3Ni44NDQgMzIgMzY4IDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DownFromLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M314.406 272H256V156.828C256 132.109 235.906 112 211.188 112H172.812C148.094 112 128 132.109 128 156.828V272H69.594C54.594 272 41.062 280.906 35.062 294.75C29.125 308.547 31.938 324.531 42.125 335.297L164.656 468.5C171.531 475.812 181.5 480 192 480S212.469 475.812 219.5 468.344L341.719 335.453C352.062 324.531 354.875 308.547 348.937 294.688C342.938 280.906 329.406 272 314.406 272ZM318.312 313.641L196.094 446.531C194.344 448.344 189.5 448.187 188.062 446.687L65.531 313.484C64 311.844 63.562 309.453 64.438 307.438C65.344 305.344 67.375 304 69.594 304H160V156.828C160 149.75 165.75 144 172.812 144H211.188C218.25 144 224 149.75 224 156.828V304H314.406C316.625 304 318.656 305.344 319.562 307.375C320.438 309.453 320 311.844 318.312 313.641ZM368 32H16C7.156 32 0 39.156 0 48S7.156 64 16 64H368C376.844 64 384 56.844 384 48S376.844 32 368 32Z" />
        </Icon>
    </>
}