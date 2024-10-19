
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `snowman-head` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/snowman-head?s=duotone snowman-head}
 * @preview ![snowman-head](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM5MC4wNjYgMjU2SDU4LjM4NUM0MS44NjUgMjg0LjI2NiAzMiAzMTYuODgzIDMyIDM1MkMzMiA0MDkuMjc3IDU3LjEwNyA0NjAuNjU2IDk2Ljg5NSA0OTUuODJDMTA4LjcwNSA1MDYuMjYyIDEyMy45OSA1MTIgMTM5Ljc1NiA1MTJIMzA4LjI3OUMzMjMuODE4IDUxMiAzMzguOTU3IDUwNi40OTIgMzUwLjYzMyA0OTYuMjM4QzQwMC4zNTQgNDUyLjU3OCA0MjcuMzQ4IDM4My42ODggNDExLjQzOCAzMDkuNTA4QzQwNy4zMzQgMjkwLjM3NSAzOTkuNzc3IDI3Mi41MzEgMzkwLjA2NiAyNTZaTTE1Mi4wMjMgMzM2QzEzOC42NSAzMzYgMTI3Ljk1MyAzMjUuMTYgMTI3Ljk1MyAzMTEuOTNDMTI3Ljk1MyAyOTguNjk1IDEzOC43OTEgMjg4IDE1Mi4wMjMgMjg4QzE2NS4yNTYgMjg4IDE3NS45NTMgMjk4LjgzNiAxNzUuOTUzIDMxMS45M0MxNzUuOTUzIDMyNS4xNiAxNjUuMTE1IDMzNiAxNTIuMDIzIDMzNlpNMjI0IDQ0OEMyMjQgNDQ4IDE5MiA0MDEuNzUgMTkyIDM4NFMyMDYuMjUgMzUyIDIyNCAzNTJTMjU2IDM2Ni4yNSAyNTYgMzg0UzIyNCA0NDggMjI0IDQ0OFpNMjk1LjkzIDMzNkMyODIuNjk3IDMzNiAyNzIgMzI1LjE2IDI3MiAzMTEuOTNDMjcyIDI5OC42OTUgMjgyLjgzOCAyODggMjk1LjkzIDI4OEMzMDkuMzAxIDI4OCAzMTkuOTk4IDI5OC44MzYgMzE5Ljk5OCAzMTEuOTNDMzIwLjEzOSAzMjUuMTYgMzA5LjMwMSAzMzYgMjk1LjkzIDMzNloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzg0IDMyQzM4NCAxNC4zOTggMzY5LjYgMCAzNTIgMEg5NkM3OC40IDAgNjQgMTQuMzk4IDY0IDMyVjE2MEgzODRWMzJaTTQzMiAxOTJIMTZDNy4xNjQgMTkyIDAgMTk5LjE2NCAwIDIwOEMwIDIzNC41MDggMjEuNDkgMjU2IDQ4IDI1Nkg0MDBDNDI2LjUxIDI1NiA0NDggMjM0LjUwOCA0NDggMjA4QzQ0OCAxOTkuMTY0IDQ0MC44MzYgMTkyIDQzMiAxOTJaTTIyNCAzNTJDMjA2LjI1IDM1MiAxOTIgMzY2LjI1IDE5MiAzODRTMjI0IDQ0OCAyMjQgNDQ4UzI1NiA0MDEuNzUgMjU2IDM4NFMyNDEuNzUgMzUyIDIyNCAzNTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SnowmanHead(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M390.066 256H58.385C41.865 284.266 32 316.883 32 352C32 409.277 57.107 460.656 96.895 495.82C108.705 506.262 123.99 512 139.756 512H308.279C323.818 512 338.957 506.492 350.633 496.238C400.354 452.578 427.348 383.688 411.438 309.508C407.334 290.375 399.777 272.531 390.066 256ZM152.023 336C138.65 336 127.953 325.16 127.953 311.93C127.953 298.695 138.791 288 152.023 288C165.256 288 175.953 298.836 175.953 311.93C175.953 325.16 165.115 336 152.023 336ZM224 448C224 448 192 401.75 192 384S206.25 352 224 352S256 366.25 256 384S224 448 224 448ZM295.93 336C282.697 336 272 325.16 272 311.93C272 298.695 282.838 288 295.93 288C309.301 288 319.998 298.836 319.998 311.93C320.139 325.16 309.301 336 295.93 336Z" />
            <path d="M384 32C384 14.398 369.6 0 352 0H96C78.4 0 64 14.398 64 32V160H384V32ZM432 192H16C7.164 192 0 199.164 0 208C0 234.508 21.49 256 48 256H400C426.51 256 448 234.508 448 208C448 199.164 440.836 192 432 192ZM224 352C206.25 352 192 366.25 192 384S224 448 224 448S256 401.75 256 384S241.75 352 224 352Z" />
        </Icon>
    </>
}