
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `baseball-ball` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/baseball-ball?s=duotone baseball-ball}
 * @preview ![baseball-ball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OC45MjkgMjY0LjI5NUM0NTYuMTY4IDI2My40OTQgNDYzLjUxNCAyNjMuMDYxIDQ3MC45NjUgMjYzLjA2NUM0NzkuMzAzIDI2My4wNjkgNDg3LjQ4NiAyNjMuNzA1IDQ5NS41NzIgMjY0LjY2OEM0OTUuNjcyIDI2MS44MDYgNDk2LjAwNCAyNTkuMDA0IDQ5NiAyNTYuMTE1QzQ5NS45MzcgMTIzLjU2OCAzODguNDMyIDE2LjA2MiAyNTUuODgzIDE2QzI1Mi45OTYgMTUuOTk2IDI1MC4xOTQgMTYuMzI4IDI0Ny4zMyAxNi40MjhDMjQ4LjI5NSAyNC41MTQgMjQ4LjkzMSAzMi42OTUgMjQ4LjkzNSA0MS4wMzVDMjQ4LjkzOSA0OC40ODYgMjQ4LjUwNiA1NS44MzIgMjQ3LjcwMyA2My4wNzFDMjQ2LjcgNzIuMTM1IDIzOC4xMjggNzguNDE3IDIyOS4xMzIgNzYuOTE0QzIyMC42NDYgNzUuNDk3IDIxNC45NjEgNjcuNjUxIDIxNS45MTIgNTkuMUMyMTYuNTc0IDUzLjE2IDIxNi45NDEgNDcuMTM1IDIxNi45MzkgNDEuMDE5QzIxNi45MzUgMzMuNzM2IDIxNS42NDQgMjYuODAxIDIxNC43NzYgMTkuNzQ2QzExNS4yNDUgMzYuOTE2IDM2LjkxNiAxMTUuMjQ1IDE5Ljc0OCAyMTQuNzc2QzI2LjgwMSAyMTUuNjQ0IDMzLjczNiAyMTYuOTM1IDQxLjAxOSAyMTYuOTM5QzQ3LjEzNSAyMTYuOTQxIDUzLjE2MiAyMTYuNTc0IDU5LjEwMiAyMTUuOTEyQzY3LjY1MSAyMTQuOTU5IDc1LjQ5NyAyMjAuNjQ2IDc2LjkxNCAyMjkuMTNDNzguNDE3IDIzOC4xMjggNzIuMTM3IDI0Ni42OTggNjMuMDcxIDI0Ny43MDNDNTUuODMyIDI0OC41MDYgNDguNDg2IDI0OC45MzkgNDEuMDM1IDI0OC45MzVDMzIuNjk3IDI0OC45MzEgMjQuNTEzIDI0OC4yOTMgMTYuNDI4IDI0Ny4zM0MxNi4zMjggMjUwLjE5NCAxNS45OTggMjUyLjk5OCAxNiAyNTUuODgzQzE2LjA2MiAzODguNDMyIDEyMy41NjcgNDk1LjkzOCAyNTYuMTE3IDQ5NkMyNTkuMDAyIDQ5Ni4wMDIgMjYxLjgwNiA0OTUuNjcgMjY0LjY3IDQ5NS41NzJDMjYzLjcwNyA0ODcuNDg2IDI2My4wNjkgNDc5LjMwMyAyNjMuMDY1IDQ3MC45NjVDMjYzLjA2MSA0NjMuNTE0IDI2My40OTQgNDU2LjE2NiAyNjQuMjk3IDQ0OC45MjlDMjY1LjMgNDM5Ljg2MyAyNzMuODcyIDQzMy41ODEgMjgyLjg2OCA0MzUuMDg0QzI5MS4zNTQgNDM2LjUwMyAyOTcuMDM5IDQ0NC4zNDkgMjk2LjA4OCA0NTIuODk4QzI5NS40MjYgNDU4LjgzOCAyOTUuMDU5IDQ2NC44NjUgMjk1LjA2MSA0NzAuOTc5QzI5NS4wNjUgNDc4LjI2NCAyOTYuMzU2IDQ4NS4xOTcgMjk3LjIyNCA0OTIuMjUyQzM5Ni43NTUgNDc1LjA4NCA0NzUuMDg0IDM5Ni43NTUgNDkyLjI1MiAyOTcuMjIyQzQ4NS4xOTkgMjk2LjM1NiA0NzguMjY0IDI5NS4wNjUgNDcwLjk4MSAyOTUuMDYxQzQ2NC44NjUgMjk1LjA1NyA0NTguODM4IDI5NS40MjQgNDUyLjg5OCAyOTYuMDg2QzQ0NC4zNDkgMjk3LjAzOSA0MzYuNTAzIDI5MS4zNTIgNDM1LjA4NiAyODIuODY4QzQzMy41ODMgMjczLjg3MiA0MzkuODYzIDI2NS4zIDQ0OC45MjkgMjY0LjI5NVpNMjI4LjkwMiAxMjkuNThDMjA4LjMyOCAxNzMuMTEgMTczLjExMiAyMDguMzI4IDEyOS41OCAyMjguOTAyQzEyMC4xMjQgMjMzLjM3IDEwOS4wMjQgMjI3LjIxOSAxMDcuMyAyMTYuOTAyTDEwNy4yNzEgMjE2LjczNkMxMDYuMTEzIDIwOS44MDMgMTA5LjU1OSAyMDIuODExIDExNS45MTMgMTk5LjgwNkMxNTIuNzEgMTgyLjQxIDE4Mi40MSAxNTIuNzA4IDE5OS44MDggMTE1LjkxM0MyMDIuODExIDEwOS41NTkgMjA5LjgwMyAxMDYuMTEzIDIxNi43MzYgMTA3LjI3MUwyMTYuOTAyIDEwNy4yOThDMjI3LjIxOSAxMDkuMDI0IDIzMy4zNyAxMjAuMTIyIDIyOC45MDIgMTI5LjU4Wk0zOTYuMDg3IDMxMi4xOTJDMzU5LjI5IDMyOS41ODggMzI5LjU5IDM1OS4yOSAzMTIuMTk0IDM5Ni4wODdDMzA5LjE4OSA0MDIuNDQxIDMwMi4xOTcgNDA1Ljg4NyAyOTUuMjY0IDQwNC43MjdMMjk1LjA5OCA0MDQuN0MyODQuNzgxIDQwMi45NzYgMjc4LjYzIDM5MS44NzYgMjgzLjA5OCAzODIuNDJDMzAzLjY3MiAzMzguODg4IDMzOC44ODggMzAzLjY3MiAzODIuNDIgMjgzLjA5OEMzOTEuODc2IDI3OC42MjggNDAyLjk3NiAyODQuNzgxIDQwNC43IDI5NS4wOThMNDA0LjcyOSAyOTUuMjY0QzQwNS44ODcgMzAyLjE5NyA0MDIuNDQxIDMwOS4xODcgMzk2LjA4NyAzMTIuMTkyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yMTcuMzQ5IDEwNy4yOThMMjE3LjE4MyAxMDcuMjcxQzIxMC4yNTEgMTA2LjExMyAyMDMuMjU4IDEwOS41NTkgMjAwLjI1NiAxMTUuOTEzQzE4Mi44NTggMTUyLjcwOCAxNTMuMTU3IDE4Mi40MSAxMTYuMzYgMTk5LjgwNkMxMTAuMDA2IDIwMi44MTEgMTA2LjU2MSAyMDkuODAzIDEwNy43MTggMjE2LjczNkwxMDcuNzQ3IDIxNi45MDJDMTA5LjQ3MSAyMjcuMjE5IDEyMC41NzEgMjMzLjM3IDEzMC4wMjggMjI4LjkwMkMxNzMuNTYgMjA4LjMyOCAyMDguNzc1IDE3My4xMSAyMjkuMzQ5IDEyOS41OEMyMzMuODE4IDEyMC4xMjIgMjI3LjY2NiAxMDkuMDI0IDIxNy4zNDkgMTA3LjI5OFpNNTkuNTUgMjE1LjkxMkM1My42MDkgMjE2LjU3NCA0Ny41ODMgMjE2Ljk0MSA0MS40NjcgMjE2LjkzOUMzNC4yMzQgMjE2LjkzNSAyNy4zNDUgMjE1LjY2NiAyMC4zNDYgMjE0Ljc5NUMxOC41MDMgMjI1LjQyMyAxNy4zOTYgMjM2LjI4MSAxNyAyNDcuMzM4QzI1LjA0NSAyNDguMjk3IDMzLjE4OCAyNDguOTMxIDQxLjQ4MiAyNDguOTM1QzQ4LjkzNCAyNDguOTM5IDU2LjI4IDI0OC41MDYgNjMuNTE5IDI0Ny43MDNDNzIuNTg1IDI0Ni42OTggNzguODY1IDIzOC4xMjggNzcuMzYyIDIyOS4xM0M3NS45NDQgMjIwLjY0NiA2OC4wOTkgMjE0Ljk1OSA1OS41NSAyMTUuOTEyWk0yMTUuMjQzIDE5Ljg5OUMyMTYuMTEzIDI2LjkwMyAyMTcuMzgyIDMzLjc4OCAyMTcuMzg2IDQxLjAxOUMyMTcuMzg4IDQ3LjEzNSAyMTcuMDIxIDUzLjE2IDIxNi4zNTkgNTkuMUMyMTUuNDA5IDY3LjY1MSAyMjEuMDkzIDc1LjQ5NyAyMjkuNTggNzYuOTE0QzIzOC41NzUgNzguNDE3IDI0Ny4xNDcgNzIuMTM1IDI0OC4xNTEgNjMuMDcxQzI0OC45NTMgNTUuODMyIDI0OS4zODYgNDguNDg2IDI0OS4zODMgNDEuMDM1QzI0OS4zNzkgMzIuNzM4IDI0OC43NDQgMjQuNTk3IDI0Ny43ODYgMTYuNTUyQzIzNi43MjggMTYuOTQ5IDIyNS44NyAxOC4wNTYgMjE1LjI0MyAxOS44OTlaTTM4Mi44NjcgMjgzLjA5OEMzMzkuMzM1IDMwMy42NzIgMzA0LjEyIDMzOC44ODggMjgzLjU0NiAzODIuNDJDMjc5LjA3NyAzOTEuODc2IDI4NS4yMjkgNDAyLjk3NiAyOTUuNTQ2IDQwNC43TDI5NS43MTIgNDA0LjcyN0MzMDIuNjQ0IDQwNS44ODcgMzA5LjYzNyA0MDIuNDQxIDMxMi42NDEgMzk2LjA4N0MzMzAuMDM3IDM1OS4yOSAzNTkuNzM4IDMyOS41ODggMzk2LjUzNSAzMTIuMTkyQzQwMi44ODkgMzA5LjE4NyA0MDYuMzM1IDMwMi4xOTcgNDA1LjE3NyAyOTUuMjY0TDQwNS4xNDggMjk1LjA5OEM0MDMuNDI0IDI4NC43ODEgMzkyLjMyNCAyNzguNjI4IDM4Mi44NjcgMjgzLjA5OFpNMjk2LjUzNiA0NTIuODk4QzI5Ny40ODYgNDQ0LjM0OSAyOTEuODAyIDQzNi41MDMgMjgzLjMxNSA0MzUuMDg0QzI3NC4zMiA0MzMuNTgxIDI2NS43NDggNDM5Ljg2MyAyNjQuNzQ0IDQ0OC45MjlDMjYzLjk0MiA0NTYuMTY2IDI2My41MDkgNDYzLjUxNCAyNjMuNTEyIDQ3MC45NjVDMjYzLjUxNiA0NzkuMjYgMjY0LjE1MSA0ODcuNDAzIDI2NS4xMDkgNDk1LjQ0OEMyNzYuMTY3IDQ5NS4wNTEgMjg3LjAyNSA0OTMuOTQ0IDI5Ny42NTIgNDkyLjEwMUMyOTYuNzgyIDQ4NS4xMDEgMjk1LjUxMyA0NzguMjE0IDI5NS41MDkgNDcwLjk3OUMyOTUuNTA3IDQ2NC44NjUgMjk1Ljg3NCA0NTguODM4IDI5Ni41MzYgNDUyLjg5OFpNNDcxLjQxMyAyNjMuMDY1QzQ2My45NjEgMjYzLjA2MSA0NTYuNjE1IDI2My40OTQgNDQ5LjM3NiAyNjQuMjk1QzQ0MC4zMSAyNjUuMyA0MzQuMDMgMjczLjg3MiA0MzUuNTMzIDI4Mi44NjhDNDM2Ljk1MSAyOTEuMzUyIDQ0NC43OTcgMjk3LjAzOSA0NTMuMzQ1IDI5Ni4wODZDNDU5LjI4NiAyOTUuNDI0IDQ2NS4zMTIgMjk1LjA1NyA0NzEuNDI4IDI5NS4wNjFDNDc4LjY2MSAyOTUuMDY1IDQ4NS41NSAyOTYuMzM0IDQ5Mi41NDkgMjk3LjIwM0M0OTQuMzk0IDI4Ni41NzcgNDk1LjQ5OSAyNzUuNzE3IDQ5NS44OTUgMjY0LjY2QzQ4Ny44NSAyNjMuNzAxIDQ3OS43MDcgMjYzLjA2OSA0NzEuNDEzIDI2My4wNjVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BaseballBall(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M448.929 264.295C456.168 263.494 463.514 263.061 470.965 263.065C479.303 263.069 487.486 263.705 495.572 264.668C495.672 261.806 496.004 259.004 496 256.115C495.937 123.568 388.432 16.062 255.883 16C252.996 15.996 250.194 16.328 247.33 16.428C248.295 24.514 248.931 32.695 248.935 41.035C248.939 48.486 248.506 55.832 247.703 63.071C246.7 72.135 238.128 78.417 229.132 76.914C220.646 75.497 214.961 67.651 215.912 59.1C216.574 53.16 216.941 47.135 216.939 41.019C216.935 33.736 215.644 26.801 214.776 19.746C115.245 36.916 36.916 115.245 19.748 214.776C26.801 215.644 33.736 216.935 41.019 216.939C47.135 216.941 53.162 216.574 59.102 215.912C67.651 214.959 75.497 220.646 76.914 229.13C78.417 238.128 72.137 246.698 63.071 247.703C55.832 248.506 48.486 248.939 41.035 248.935C32.697 248.931 24.513 248.293 16.428 247.33C16.328 250.194 15.998 252.998 16 255.883C16.062 388.432 123.567 495.938 256.117 496C259.002 496.002 261.806 495.67 264.67 495.572C263.707 487.486 263.069 479.303 263.065 470.965C263.061 463.514 263.494 456.166 264.297 448.929C265.3 439.863 273.872 433.581 282.868 435.084C291.354 436.503 297.039 444.349 296.088 452.898C295.426 458.838 295.059 464.865 295.061 470.979C295.065 478.264 296.356 485.197 297.224 492.252C396.755 475.084 475.084 396.755 492.252 297.222C485.199 296.356 478.264 295.065 470.981 295.061C464.865 295.057 458.838 295.424 452.898 296.086C444.349 297.039 436.503 291.352 435.086 282.868C433.583 273.872 439.863 265.3 448.929 264.295ZM228.902 129.58C208.328 173.11 173.112 208.328 129.58 228.902C120.124 233.37 109.024 227.219 107.3 216.902L107.271 216.736C106.113 209.803 109.559 202.811 115.913 199.806C152.71 182.41 182.41 152.708 199.808 115.913C202.811 109.559 209.803 106.113 216.736 107.271L216.902 107.298C227.219 109.024 233.37 120.122 228.902 129.58ZM396.087 312.192C359.29 329.588 329.59 359.29 312.194 396.087C309.189 402.441 302.197 405.887 295.264 404.727L295.098 404.7C284.781 402.976 278.63 391.876 283.098 382.42C303.672 338.888 338.888 303.672 382.42 283.098C391.876 278.628 402.976 284.781 404.7 295.098L404.729 295.264C405.887 302.197 402.441 309.187 396.087 312.192Z" />
            <path d="M217.349 107.298L217.183 107.271C210.251 106.113 203.258 109.559 200.256 115.913C182.858 152.708 153.157 182.41 116.36 199.806C110.006 202.811 106.561 209.803 107.718 216.736L107.747 216.902C109.471 227.219 120.571 233.37 130.028 228.902C173.56 208.328 208.775 173.11 229.349 129.58C233.818 120.122 227.666 109.024 217.349 107.298ZM59.55 215.912C53.609 216.574 47.583 216.941 41.467 216.939C34.234 216.935 27.345 215.666 20.346 214.795C18.503 225.423 17.396 236.281 17 247.338C25.045 248.297 33.188 248.931 41.482 248.935C48.934 248.939 56.28 248.506 63.519 247.703C72.585 246.698 78.865 238.128 77.362 229.13C75.944 220.646 68.099 214.959 59.55 215.912ZM215.243 19.899C216.113 26.903 217.382 33.788 217.386 41.019C217.388 47.135 217.021 53.16 216.359 59.1C215.409 67.651 221.093 75.497 229.58 76.914C238.575 78.417 247.147 72.135 248.151 63.071C248.953 55.832 249.386 48.486 249.383 41.035C249.379 32.738 248.744 24.597 247.786 16.552C236.728 16.949 225.87 18.056 215.243 19.899ZM382.867 283.098C339.335 303.672 304.12 338.888 283.546 382.42C279.077 391.876 285.229 402.976 295.546 404.7L295.712 404.727C302.644 405.887 309.637 402.441 312.641 396.087C330.037 359.29 359.738 329.588 396.535 312.192C402.889 309.187 406.335 302.197 405.177 295.264L405.148 295.098C403.424 284.781 392.324 278.628 382.867 283.098ZM296.536 452.898C297.486 444.349 291.802 436.503 283.315 435.084C274.32 433.581 265.748 439.863 264.744 448.929C263.942 456.166 263.509 463.514 263.512 470.965C263.516 479.26 264.151 487.403 265.109 495.448C276.167 495.051 287.025 493.944 297.652 492.101C296.782 485.101 295.513 478.214 295.509 470.979C295.507 464.865 295.874 458.838 296.536 452.898ZM471.413 263.065C463.961 263.061 456.615 263.494 449.376 264.295C440.31 265.3 434.03 273.872 435.533 282.868C436.951 291.352 444.797 297.039 453.345 296.086C459.286 295.424 465.312 295.057 471.428 295.061C478.661 295.065 485.55 296.334 492.549 297.203C494.394 286.577 495.499 275.717 495.895 264.66C487.85 263.701 479.707 263.069 471.413 263.065Z" />
        </Icon>
    </>
}