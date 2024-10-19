
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `message-text` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-text?s=thin message-text}
 * @preview ![message-text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggLTAuMDAySDY0QzI4Ljc1IC0wLjAwMiAwIDI4Ljc0NiAwIDYzLjk5MlYzNTEuOTY5QzAgMzg3LjIxNyAyOC43NSA0MTUuOTY1IDY0IDQxNS45NjVIMTYwVjQ5OS45NTdDMTYwIDUwNy4wMjkgMTY1LjkyIDUxMS45OTggMTcyLjE3OCA1MTEuOTk4QzE3NC41NDcgNTExLjk5OCAxNzYuOTYzIDUxMS4yODUgMTc5LjEyNSA1MDkuNzA3TDMwNCA0MTUuOTY1SDQ0OEM0ODMuMjUgNDE1Ljk2NSA1MTIgMzg3LjIxNyA1MTIgMzUxLjk2OVY2My45OTJDNTEyIDI4Ljc0NiA0ODMuMjUgLTAuMDAyIDQ0OCAtMC4wMDJaTTQ5NiAzNTEuOTY5QzQ5NiAzNzguNDM0IDQ3NC40NjcgMzk5Ljk2NSA0NDggMzk5Ljk2NUgyOTguNjYyTDI5NC4zOTUgNDAzLjE3TDE3NiA0OTIuMDUxVjM5OS45NjVINjRDMzcuNTMzIDM5OS45NjUgMTYgMzc4LjQzNCAxNiAzNTEuOTY5VjYzLjk5MkMxNiAzNy41MjcgMzcuNTMzIDE1Ljk5NiA2NCAxNS45OTZINDQ4QzQ3NC40NjcgMTUuOTk2IDQ5NiAzNy41MjcgNDk2IDYzLjk5MlYzNTEuOTY5Wk0zNDQgMTQzLjk5OEgxNjhDMTYzLjU5NCAxNDMuOTk4IDE2MCAxNDcuNTkyIDE2MCAxNTEuOTk4UzE2My41OTQgMTU5Ljk5OCAxNjggMTU5Ljk5OEgyNDhWMjk1Ljk5OEMyNDggMzAwLjQwNCAyNTEuNTk0IDMwMy45OTggMjU2IDMwMy45OThTMjY0IDMwMC40MDQgMjY0IDI5NS45OThWMTU5Ljk5OEgzNDRDMzQ4LjQwNiAxNTkuOTk4IDM1MiAxNTYuNDA0IDM1MiAxNTEuOTk4UzM0OC40MDYgMTQzLjk5OCAzNDQgMTQzLjk5OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MessageText(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 -0.002H64C28.75 -0.002 0 28.746 0 63.992V351.969C0 387.217 28.75 415.965 64 415.965H160V499.957C160 507.029 165.92 511.998 172.178 511.998C174.547 511.998 176.963 511.285 179.125 509.707L304 415.965H448C483.25 415.965 512 387.217 512 351.969V63.992C512 28.746 483.25 -0.002 448 -0.002ZM496 351.969C496 378.434 474.467 399.965 448 399.965H298.662L294.395 403.17L176 492.051V399.965H64C37.533 399.965 16 378.434 16 351.969V63.992C16 37.527 37.533 15.996 64 15.996H448C474.467 15.996 496 37.527 496 63.992V351.969ZM344 143.998H168C163.594 143.998 160 147.592 160 151.998S163.594 159.998 168 159.998H248V295.998C248 300.404 251.594 303.998 256 303.998S264 300.404 264 295.998V159.998H344C348.406 159.998 352 156.404 352 151.998S348.406 143.998 344 143.998Z" />
        </Icon>
    </>
}