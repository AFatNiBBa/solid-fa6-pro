
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lightbulb-dollar` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-dollar?s=regular lightbulb-dollar}
 * @preview ![lightbulb-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTIuMDYyIDQ1NC4zMjhDMTEyLjA2MiA0NjAuNjI1IDExMy45MzggNDY2Ljc4MSAxMTcuNDA2IDQ3Mi4wMzFMMTM0LjUgNDk3LjcxOUMxMzkuNzUgNTA1LjU5NCAxNTEuNjg4IDUxMiAxNjEuMTU2IDUxMkgyMjIuODc1QzIzMi4zMTIgNTEyIDI0NC4yNSA1MDUuNTk0IDI0OS41IDQ5Ny43MTlMMjY2LjU5NCA0NzIuMDMxQzI2OS41MzEgNDY3LjU5NCAyNzEuOTM3IDQ1OS42NTYgMjcxLjkzNyA0NTQuMzI4TDI3MiA0MTUuOTg0SDExMkwxMTIuMDYyIDQ1NC4zMjhaTTE5MiAwQzkwLjAwNCAwLjMyIDE2IDgyLjk3MyAxNiAxNzUuOTkyQzE2IDIyMC4zNjcgMzIuNDM4IDI2MC44MzYgNTkuNTYyIDI5MS43NzNDNzYuMDk0IDMxMC42MTcgMTAxLjkwNiAzNTAuMDA0IDExMS43ODEgMzgzLjIyM0MxMTEuODEyIDM4My40NzMgMTExLjg0NCAzODMuNzM4IDExMS44NzUgMzg0LjAwNEgyNzIuMTI1QzI3Mi4xNTYgMzgzLjczOCAyNzIuMTg3IDM4My40ODggMjcyLjIxOSAzODMuMjIzQzI4Mi4wOTQgMzUwLjAwNCAzMDcuOTA2IDMxMC42MTcgMzI0LjQzNyAyOTEuNzczQzM1MS41NjIgMjYwLjgzNiAzNjggMjIwLjM2NyAzNjggMTc1Ljk5MkMzNjggNzguNzk3IDI4OS4yMTMgMC4wMDQgMTkyIDBaTTI4OC4zNTUgMjYwLjExN0MyNzIuNjk5IDI3Ny45NjUgMjUzLjMxOCAzMDYuNDE0IDIzOS4zMDcgMzM2LjAwNEgxNDQuNjkzQzEzMC42ODQgMzA2LjQxNCAxMTEuMzA1IDI3Ny45NjkgOTUuNjU0IDI2MC4xMjlDNzUuMjQyIDIzNi44NDggNjQgMjA2Ljk2NSA2NCAxNzUuOTkyQzY0IDExMy4yNzMgMTEyLjExNSA0OC4yNSAxOTEuOTk0IDQ4QzI2Mi41OCA0OC4wMDQgMzIwIDEwNS40MjIgMzIwIDE3NS45OTJDMzIwIDIwNi45NjUgMzA4Ljc1OCAyMzYuODQ4IDI4OC4zNTUgMjYwLjExN1pNMTk3LjUgMTY0Ljc1QzE4NC40NjkgMTYxLjAwNiAxNjguMDY1IDE1Ny4zMzIgMTY5LjU3OCAxNDguNUMxNzAuOTUzIDE0MC42ODggMTg2LjE3MiAxMzguNzgxIDE5OS44NDQgMTQwLjg3NUMyMDUuNDM4IDE0MS43MTkgMjExLjU3OCAxNDMuNjg4IDIxNy40MzggMTQ1LjcxOUMyMjcuODI4IDE0OS4zMTMgMjM5LjI2NiAxNDMuNzgxIDI0Mi44OTEgMTMzLjM3NUMyNDYuNTE2IDEyMi45MzggMjQxIDExMS41MzEgMjMwLjU2MyAxMDcuOTA2QzIyMy4zNDQgMTA1LjQyMiAyMTcuNDUzIDEwMy44MjggMjEyIDEwMi42MzNWOTZDMjEyIDg0Ljk2OSAyMDMuMDQ3IDc2IDE5MiA3NlMxNzIgODQuOTY5IDE3MiA5NlYxMDEuOTkyQzE0OS41NzggMTA2Ljc2MiAxMzMuODA5IDEyMC43NSAxMzAuMTcyIDE0MS42ODhDMTIyLjc2NiAxODQuNTMxIDE2My4zNTkgMTk2LjQzOCAxODAuNjg4IDIwMS41MzFDMjA1LjcwOCAyMDguNzk1IDIxNS44MiAyMTEuMzYxIDIxNC40MjIgMjE5LjVDMjEzLjA0NyAyMjcuMzEyIDE5Ny44MjggMjI5LjI1IDE4NC4xMDkgMjI3LjEyNUMxNzkuNjQgMjI2LjQ2MSAxNzUuMDEgMjI1LjM4NyAxNTUuOTg0IDIxOC40NjlDMTQ1LjU3OCAyMTQuODc1IDEzNC4xNTYgMjIwLjI4MSAxMzAuNDY5IDIzMC42ODhDMTI2Ljc5NyAyNDEuMDk0IDEzMi4yNSAyNTIuNTMxIDE0Mi42NzIgMjU2LjIxOUMxNDguODU5IDI1OC4zOTUgMTU5Ljk3MyAyNjIuNTY4IDE3MiAyNjUuMjNWMjcyQzE3MiAyODMuMDMxIDE4MC45NTMgMjkyIDE5MiAyOTJTMjEyIDI4My4wMzEgMjEyIDI3MlYyNjUuNzQ2QzIzNC4zNjEgMjYwLjk1MyAyNTAuMjA1IDI0Ny4yMTkgMjUzLjgyOCAyMjYuMzEyQzI2MS4zMTIgMTgzLjAzMSAyMTkuNzk3IDE3MS4xMjUgMTk3LjUgMTY0Ljc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LightbulbDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M112.062 454.328C112.062 460.625 113.938 466.781 117.406 472.031L134.5 497.719C139.75 505.594 151.688 512 161.156 512H222.875C232.312 512 244.25 505.594 249.5 497.719L266.594 472.031C269.531 467.594 271.937 459.656 271.937 454.328L272 415.984H112L112.062 454.328ZM192 0C90.004 0.32 16 82.973 16 175.992C16 220.367 32.438 260.836 59.562 291.773C76.094 310.617 101.906 350.004 111.781 383.223C111.812 383.473 111.844 383.738 111.875 384.004H272.125C272.156 383.738 272.187 383.488 272.219 383.223C282.094 350.004 307.906 310.617 324.437 291.773C351.562 260.836 368 220.367 368 175.992C368 78.797 289.213 0.004 192 0ZM288.355 260.117C272.699 277.965 253.318 306.414 239.307 336.004H144.693C130.684 306.414 111.305 277.969 95.654 260.129C75.242 236.848 64 206.965 64 175.992C64 113.273 112.115 48.25 191.994 48C262.58 48.004 320 105.422 320 175.992C320 206.965 308.758 236.848 288.355 260.117ZM197.5 164.75C184.469 161.006 168.065 157.332 169.578 148.5C170.953 140.688 186.172 138.781 199.844 140.875C205.438 141.719 211.578 143.688 217.438 145.719C227.828 149.313 239.266 143.781 242.891 133.375C246.516 122.938 241 111.531 230.563 107.906C223.344 105.422 217.453 103.828 212 102.633V96C212 84.969 203.047 76 192 76S172 84.969 172 96V101.992C149.578 106.762 133.809 120.75 130.172 141.688C122.766 184.531 163.359 196.438 180.688 201.531C205.708 208.795 215.82 211.361 214.422 219.5C213.047 227.312 197.828 229.25 184.109 227.125C179.64 226.461 175.01 225.387 155.984 218.469C145.578 214.875 134.156 220.281 130.469 230.688C126.797 241.094 132.25 252.531 142.672 256.219C148.859 258.395 159.973 262.568 172 265.23V272C172 283.031 180.953 292 192 292S212 283.031 212 272V265.746C234.361 260.953 250.205 247.219 253.828 226.312C261.312 183.031 219.797 171.125 197.5 164.75Z" />
        </Icon>
    </>
}